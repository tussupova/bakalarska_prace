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
  downloadPhoto,
  downloadPhotosInfoAsync,
  uploadPhotosAsync,
} from "../../services/PhotoServices";

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

  useEffect(() => {
    // vola se vzdycky pri renderovani a pouze jednou
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const res = await downloadPhotosInfoAsync();
      const mappedPhotos = res.data.map((x) => {
        return {
          title: x.originalName,
          date: x.date,
          width: 4,
          height: 2,
          src:"https://localhost:5001/photo/getPhotosFromId/" + x.photoId
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
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    closeLightbox();
  };

  return (
    <div>
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
                    Date
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    <DeleteIcon />
                  </Button>
                </Toolbar>
              </AppBar>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Dialog>
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}