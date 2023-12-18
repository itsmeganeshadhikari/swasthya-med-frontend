import {useState} from 'react';
function LogoUpload() {
    const [file,setFile]=useState();
    function getFile(event){
    setFile(URL.createObjectURL(event.target.files[0]));
    }
  return (
    <div className='logo'>
    <h2>Add Image</h2>
      <input type="file" onChange={getFile} />
      <img src={file}  />
    </div>
  )
}
export default LogoUpload;