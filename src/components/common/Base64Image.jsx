import React,{Component} from 'react';

class FileBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

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

