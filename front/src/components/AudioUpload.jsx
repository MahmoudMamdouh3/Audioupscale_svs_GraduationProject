import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Avatar,
  Checkbox,
  ListItemText,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios"; // Import Axios

function AudioUpload() {
  const [selectedAudioFile, setSelectedAudioFile] = useState(null);
  const [selectedMidiFile, setSelectedMidiFile] = useState(null);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [openArtistSelection, setOpenArtistSelection] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [artistCounts, setArtistCounts] = useState({
    "Amr Diab": 0,
    "Om Kalthoum": 0,
    "Sayed Darwish": 0,
    Abdelhalim: 0,
    Abdelwahab: 0,
    "Mickael Jackson": 0,
  });
  const [artistImages] = useState({
    "Amr Diab": "/assets/amrdiab.jpeg",
    "Om Kalthoum": "/assets/omkalthoum.jpeg",
    "Sayed Darwish": "/assets/sayeddarwish.jpeg",
    Abdelhalim: "/assets/abdelhalim.jpeg",
    Abdelwahab: "/assets/abdelwahab.jpeg",
    "Mickael Jackson": "/assets/jackson.jpeg",
  });

  const handleAudioFileChange = (event) => {
    setSelectedAudioFile(event.target.files[0]);
  };

  const handleMidiFileChange = (event) => {
    setSelectedMidiFile(event.target.files[0]);
  };

  const handleFormatChange = (event) => {
    setSelectedFormats(event.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("audioFile", selectedAudioFile);
    formData.append("midiFile", selectedMidiFile);
    formData.append("formats", JSON.stringify(selectedFormats));

    try {
      const response = await axios.post("YOUR_UPLOAD_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleOpenArtistSelection = () => {
    setOpenArtistSelection(true);
  };

  const handleCloseArtistSelection = () => {
    setOpenArtistSelection(false);
  };

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
    const updatedCounts = { ...artistCounts };
    updatedCounts[artist]++;
    setArtistCounts(updatedCounts);
    setOpenArtistSelection(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: 400,
        margin: "auto",
        marginTop: 10,
        padding: 2,
        "& > *": {
          marginBottom: 2,
        },
        borderRadius: 8, // Set border radius for the main container
      }}
    >
      <Typography variant="h4" align="center" gutterBottom color="black">
        File Upload
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenArtistSelection}
          sx={{ borderRadius: 8 }} // Set border radius for the button
        >
          Select Your Artist
        </Button>
        <Typography variant="body1" color="textSecondary">
          Selected Artist: {selectedArtist}
        </Typography>
      </Box>
      <input
        type="file"
        accept="audio/*"
        onChange={handleAudioFileChange}
        style={{ display: "none" }}
        id="audio-file-input"
      />
      <Box sx={{ marginBottom: 2 }}>
        <label htmlFor="audio-file-input">
          <Button
            variant="contained"
            component="span"
            fullWidth
            sx={{ borderRadius: 8 }} // Set border radius for the button
          >
            {selectedAudioFile ? "Audio File Selected" : "Select Audio File"}
          </Button>
        </label>
      </Box>
      <input
        type="file"
        accept=".mid,.midi"
        onChange={handleMidiFileChange}
        style={{ display: "none" }}
        id="midi-file-input"
      />
      <Box sx={{ marginBottom: 2 }}>
        <label htmlFor="midi-file-input">
          <Button
            variant="contained"
            component="span"
            fullWidth
            sx={{ borderRadius: 8 }} // Set border radius for the button
          >
            {selectedMidiFile ? "MIDI File Selected" : "Select MIDI File"}
          </Button>
        </label>
      </Box>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="format-select-label">Select Enhancement</InputLabel>
        <Select
          labelId="format-select-label"
          id="format-select"
          multiple
          value={selectedFormats}
          onChange={handleFormatChange}
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="UpScaling">
            <Checkbox checked={selectedFormats.includes("UpScaling")} />
            <ListItemText primary="UpScaling" />
          </MenuItem>
          <MenuItem value="Retrieval Voice Conversion">
            <Checkbox
              checked={selectedFormats.includes("Retrieval Voice Conversion")}
            />
            <ListItemText primary="Retrieval Voice Conversion" />
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleUpload}
        disabled={
          !selectedAudioFile || !selectedMidiFile || !selectedFormats.length
        }
        sx={{ marginBottom: 2, borderRadius: 8 }} // Set border radius for the button
      >
        Upload
      </Button>

      <Dialog open={openArtistSelection} onClose={handleCloseArtistSelection}>
        <DialogTitle>Select Your Favorite Artist</DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            {Object.keys(artistCounts).map((artist, index) => (
              <Grid item xs={4} key={index}>
                <Avatar
                  alt={artist}
                  src={artistImages[artist]}
                  sx={{ width: 150, height: 150, margin: "auto" }}
                />
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ marginTop: 1 }}
                >
                  {artist}
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                >{`Selected: ${artistCounts[artist]} times`}</Typography>
                <Box sx={{ textAlign: "center", marginTop: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleSelectArtist(artist)}
                    sx={{ borderRadius: 8 }} // Set border radius for the button
                  >
                    Select
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseArtistSelection} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AudioUpload;