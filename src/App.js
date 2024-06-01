import { useState } from "react";

function App() {
  let [selectedfile, setselectedfile] = useState(null);
  let fileinput = (event) => {
    const file = event.target.files[0];
    setselectedfile(file);
  };

  let uploaddata = () => {
    if (selectedfile) {
      console.log("upload file-", selectedfile);
    } else {
      console.log("no file upload");
    }
  };
  return (
    <>
      <h2>File Upload:</h2>
      <input type="file" name="f" onChange={fileinput} />
      <br />
      <br />
      <button onClick={uploaddata}>Upload</button>
    </>
  );
}

export default App;
