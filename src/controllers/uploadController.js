// Matches the FUTURE BACKEND note in src/components/ui/ImageUpload.jsx:
//   const url = await uploadService.upload(file);
//   onChange(url);
// This returns { url } — the one adjustment needed on the frontend is
// swapping the FileReader base64 read for a call to this endpoint.
export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  const url = `/uploads/${req.file.filename}`;
  res.status(201).json({ url });
};
