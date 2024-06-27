// // // import React, { useState } from "react";
// // // import axios from "axios"; // Import Axios

// // // import { Container, Typography, TextField, Button, Box } from "@mui/material";

// // // function VideoUpload() {
// // //   const [videoFile, setVideoFile] = useState(null);
// // //   const [errors, setErrors] = useState({});
// // //   const baseUrl = "http://127.0.0.1:8080";  // Update to match your server
// // //   const validateInputs = () => {
// // //     const errors = {};
// // //     if (!videoFile.trim()) {
// // //       errors.videoFile = "video file is required";
// // //     }
   
  
// // //     setErrors(errors);
// // //     return Object.keys(errors).length === 0;
// // //   };
// // //   const handleVideoChange = async (event) => {
// // //     event.preventDefault();
// // //     const file = event.target.files[0];

// // //     if (validateInputs()) {
// // //       try {
// // //         const response = await axios.post(`${baseUrl}/Video/`, {
// // //           file,
 
// // //         });
// // //         console.log(" successful:", response.data);
// // //       } catch (error) {
// // //         console.error("error:", error.response.data);
// // //       }
// // //     }

// // //     // Validate file type (optional)
// // //     // if (file && file.type.startsWith("video/")) {
// // //     //   setVideoFile(file);
// // //     // } else {
// // //     //   setErrors({ video: "Please select a valid video file." });
// // //     // }
// // //   };

// // //   const handleUpload = async(e) => {
// // //     e.preventDefault();
// // //     if (validateInputs()) {
// // //       try {
// // //         const response = await axios.post(`${baseUrl}/video/`, {
// // //           videoFile,
        
// // //         });
// // //         console.log("video successful:", response.data);
// // //       } catch (error) {
// // //         console.error("video error:", error.response.data);
// // //       }
// // //     }

// // //     // Handle video upload logic
// // //     // if (videoFile) {
// // //     //   console.log("Uploading video:", videoFile);
// // //     //   // You can implement your upload logic here
// // //     // } else {
// // //     //   setErrors({ video: "Please select a video file to upload." });
// // //     // }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         minHeight: "calc(100vh - 64px)", // Adjust height to match other pages
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //       }}
// // //     >
// // //       <Container maxWidth="sm">
// // //         <Typography variant="h4" gutterBottom>
// // //           Video Upload
// // //         </Typography>
// // //         <form>
// // //           <input
// // //             type="file"
// // //             accept="video/*"
// // //             onChange={handleVideoChange}
// // //             style={{ marginBottom: "1rem" }}
// // //           />
// // //           {errors.video && (
// // //             <Typography color="error" gutterBottom>
// // //               {errors.video}
// // //             </Typography>
// // //           )}
// // //           <Button variant="contained" color="primary" onClick={handleUpload}>
// // //             Upload Video
// // //           </Button>
// // //         </form>
// // //       </Container>
// // //     </Box>
// // //   );
// // // }

// // // export default VideoUpload;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Container, Typography, TextField, Button, Box } from "@mui/material";

// // function VideoUpload() {
// //   const [videoFile, setVideoFile] = useState(null);
// //   const [errors, setErrors] = useState({});
// //   const [processing, setProcessing] = useState(false);
// //   const [processedVideoUrl, setProcessedVideoUrl] = useState("");

// //   const baseUrl = "http://127.0.0.1:8000";  // Update to match your server

// //   const handleVideoChange = (event) => {
// //     setVideoFile(event.target.files[0]);
// //   };

// //   const handleUpload = async (event) => {
// //     event.preventDefault();
// //     if (!videoFile) {
// //       setErrors({ videoFile: "A video file is required" });
// //       return;
// //     }
  
// //     const formData = new FormData();
// //     formData.append("video_file", videoFile);
  
// //     setProcessing(true);
// //     try {
// //       const response = await axios.post(`${baseUrl}/upload/`, formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });
// //       setProcessedVideoUrl(response.data.processed_video_url);
// //       setProcessing(false);
// //     } catch (error) {
// //       console.error("Error uploading video:", error.response?.data || error.message);
// //       setProcessing(false);
// //     }
// //   };
  

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "calc(100vh - 64px)",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Container maxWidth="sm">
// //         <Typography variant="h4" gutterBottom>
// //           Video Upload
// //         </Typography>
// //         <form onSubmit={handleUpload}>
// //           <input
// //             type="file"
// //             accept="video/*"
// //             onChange={handleVideoChange}
// //             style={{ marginBottom: "1rem" }}
// //           />
// //           {errors.videoFile && (
// //             <Typography color="error" gutterBottom>
// //               {errors.videoFile}
// //             </Typography>
// //           )}
// //           <Button variant="contained" color="primary" type="submit" disabled={processing}>
// //             {processing ? "Processing..." : "Upload Video"}
// //           </Button>
// //         </form>
// //         {processedVideoUrl && (
// //           <Box mt={2}>
// //             <Typography variant="h6">Processed Video:</Typography>
// //             <video width="100%" controls>
// //               <source src={processedVideoUrl} type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           </Box>
// //         )}
// //       </Container>
// //     </Box>
// //   );
// // }

// // export default VideoUpload;
// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";

// function VideoUpload() {
//   const [videoFile, setVideoFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [processing, setProcessing] = useState(false);
//   const [processedVideoUrl, setProcessedVideoUrl] = useState("");
//   const baseUrl = "http://127.0.0.1:8080";  // Update to match your server

//   const validateInputs = () => {
//     const errors = {};
//     if (!videoFile) {
//       errors.videoFile = "A video file is required";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleVideoChange = (event) => {
//     setVideoFile(event.target.files[0]);
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();
//     if (!validateInputs()) return;

//     const formData = new FormData();
//     formData.append("video_file", videoFile);

//     setProcessing(true);
//     try {
    
//       const response = await axios.post(`${baseUrl}/video/`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setProcessedVideoUrl(response.data.processed_video_url);
//       setProcessing(false);
//     } catch (error) {
//       console.error("Error uploading video:", error.response?.data || error.message);
//       setProcessing(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "calc(100vh - 64px)", // Adjust height to match other pages
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Typography variant="h4" gutterBottom>
//           Video Upload
//         </Typography>
//         <form onSubmit={handleUpload}>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoChange}
//             style={{ marginBottom: "1rem" }}
//           />
//           {errors.videoFile && (
//             <Typography color="error" gutterBottom>
//               {errors.videoFile}
//             </Typography>
//           )}
//           <Button type="submit" variant="contained" color="primary">
//             Upload Video
//           </Button>
//         </form>
//         {processing && <Typography>Processing...</Typography>}
//         {processedVideoUrl && (
//           <video width="400" controls>
//             <source src={processedVideoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </Container>
//     </Box>
//   );
// }

// export default VideoUpload;
//AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Typography, Button, Box } from "@mui/material";

// function VideoUpload() {
//   const [videoFile, setVideoFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [processing, setProcessing] = useState(false);
//   const [processedVideoUrl, setProcessedVideoUrl] = useState("");
//   const baseUrl = "http://127.0.0.1:8080"; // Update to match your Django backend URL

//   const validateInputs = () => {
//     const errors = {};
//     if (!videoFile) {
//       errors.videoFile = "A video file is required";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleVideoChange = (event) => {
//     setVideoFile(event.target.files[0]);
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();
//     if (!validateInputs()) return;

//     const formData = new FormData();
//     formData.append("video_file", videoFile);

//     setProcessing(true);
//     try {
//       const response = await axios.post(`${baseUrl}/upload/`, formData,{
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setProcessedVideoUrl(response.data.processed_video_url);
//       setProcessing(false);
//     } catch (error) {
//       console.error("Error uploading video:", error.response?.data || error.message);
//       setProcessing(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "calc(100vh - 64px)",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Typography variant="h4" gutterBottom>
//           Video Upload
//         </Typography>
//         <form onSubmit={handleUpload}>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoChange}
//             style={{ marginBottom: "1rem" }}
//           />
//           {errors.videoFile && (
//             <Typography color="error" gutterBottom>
//               {errors.videoFile}
//             </Typography>
//           )}
//           <Button type="submit" variant="contained" color="primary" disabled={processing}>
//             {processing ? "Processing..." : "Upload Video"}
//           </Button>
//         </form>
//         {processedVideoUrl && (
//           <Box mt={2}>
//             <Typography variant="h6">Processed Video:</Typography>
//             <video width="100%" controls>
//               <source src={processedVideoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// }

// export default VideoUpload;
import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, Button, Box } from "@mui/material";

function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [processedVideoUrl, setProcessedVideoUrl] = useState("");
  const baseUrl = "http://127.0.0.1:8080"; // Update to match your Django backend URL

  const validateInputs = () => {
    const errors = {};
    if (!videoFile) {
      errors.videoFile = "A video file is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleVideoChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const formData = new FormData();
    formData.append("video_file", videoFile);

    setProcessing(true);
    try {
      const response = await axios.post(`${baseUrl}/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Processed Video URL:", response.data.processed_video_url); // Log the URL
      setProcessedVideoUrl(response.data.processed_video_url);
      setProcessing(false);
    } catch (error) {
      console.error("Error uploading video:", error.response?.data || error.message);
      setProcessing(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Video Upload
        </Typography>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            style={{ marginBottom: "1rem" }}
          />
          {errors.videoFile && (
            <Typography color="error" gutterBottom>
              {errors.videoFile}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" disabled={processing}>
            {processing ? "Processing..." : "Upload Video"}
          </Button>
        </form>
        {processing && <Typography>Processing...</Typography>}
        {processedVideoUrl && (
          <Box mt={2}>
            <Typography variant="h6">Processed Video:</Typography>
            <video width="100%" controls>
              <source src={processedVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default VideoUpload;
