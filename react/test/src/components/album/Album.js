import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../photos";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "../Photo";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deletePhotos,
  downloadPhotosInfoAsync,
} from "../../services/PhotoServices";
import {API_DEFAULT} from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(5),
  },
  media: {
    height: theme.spacing(30),
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function Album() {
  const classes = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photosWithTitle, setPhotosWithTitle] = useState([]);
  const [deleteId, setId] = useState();

  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    try {
      const res = await downloadPhotosInfoAsync();
      const mappedPhotos = res.data.map((x) => {
        return {
          id: x.photoId,
          title: x.originalName,
          date: x.date,
          width: 4,
          height: 2,
          src: API_DEFAULT + "/photo/getPhotosFromId/" + x.photoId,
        };
      });
      setPhotosWithTitle(mappedPhotos);
    } catch (e) {
      console.log(e, "Can not download photos info");
    }
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    setOpen(true);
    setPhotosId(index);
    setId(photo.id);

  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [photosId, setPhotosId] = React.useState();

  const handleClose = () => {
    setOpen(false);
    closeLightbox();
  };
  const deletePhoto = async (id) => {
    try {
      if (window.confirm("Do you really want to remove this photos?")) {
        const res = await deletePhotos(id);
        await getInfo();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div data-cy="gallery">
      <Gallery photos={photosWithTitle} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Dialog fullScreen open={open} onClose={handleClose}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    2021-24-05
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    <DeleteIcon onClick={() => deletePhoto(deleteId)} />
                  </Button>
                </Toolbar>
              </AppBar>
              <Carousel currentIndex={currentImage} views={photosWithTitle} />
            </Dialog>
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
