// import { useState } from 'react';
// import ImageUploading from 'react-images-uploading';

// export function Uploader() {
//   const [images, setImages] = useState([]);
//   const maxNumber = 69;

//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading
//         multiple={false}
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       > 
//         {({
//           imageList,
//           onImageUpload,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <button
//               style={isDragging ? { color: 'red' } : undefined}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click or Drop here
//             </button>
//             &nbsp;
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image['data_url']} alt="" width="100" />
//                 <div className="image-item__btn-wrapper">
//                   <button onClick={() => onImageUpdate(index)}>Update</button>
//                   <button onClick={() => onImageRemove(index)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }

import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

// Get production API keys from Upload.io
const uploader = new Uploader({
  apiKey: "free"
});
let UrlArray = []

// Customize the dropzone UI (see "customization"):
const options = { multi: false }

// Render the file upload dropzone:
export const UploaderReact = ({ setImageURL }) =>
  <UploadDropzone uploader={uploader}       // Required.
    options={options}         // Optional.
    width="100%"             // Optional.
    height="300px"            // Optional.
    onUpdate={files => {      // Optional.
      if (files.length === 0) {
        console.log('No files selected.')
      } else {
        console.log('Files uploaded:');
        UrlArray = [...files]
        console.log(UrlArray);
        setImageURL([...UrlArray]);
      }
    }} />