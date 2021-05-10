import React,{Component} from 'react';
/* 
Author: Juan Pablo Paredes
Class: FileBase64
   Implemented to get file information and convert to base64 format. This is useful to save images in localStorage in a readable format. 
   This component is consummed by LocalStorage.jsx.
*/
class FileBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  /* 
  Author: Juan Pablo Paredes
  Method: handleChange
   Useful to extract information from file, in this case we are using base64 format.
  */
  handleChange=(e)=>{
    let files = e.target.files;
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let fileInfo = {
          base64: reader.result
        };
        allFiles.push(fileInfo);
        if(allFiles.length === files.length){
          this.props.onDone(allFiles[0]);
        }
      } 
    } 
  }

  render() {
    return (
      <input type="file" onChange={ this.handleChange} />
    );
  }
}
export default FileBase64;

