import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ContentUploadPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    getUploads();
    console.log(uploads);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !content) {
      setMessage("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Upload successful!");
      console.log("Uploaded:", res.data);
    } catch (error) {
      setMessage("Upload failed.");
      console.error(error);
    }
  };

  const getUploads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      console.log("Items:", res.data);
      setUploads(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteUploads = async (item) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/items/${item.id}`);
      console.log("Deleted all items:", res.data);
      setUploads([]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      <div className="uploads">
        <h3>Previous Uploads</h3>
        {
            uploads.map((upload) => (
              <div key={upload.id}>
                <img src={`http://localhost:5000${upload.image_path}`} alt={upload.title} />
                <p>{upload.title}</p>
                <p>{upload.content}</p>
                <button onClick={() => deleteUploads(upload)}>Delete</button>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default ContentUploadPage;
