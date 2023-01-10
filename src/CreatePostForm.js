import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CreatePostForm() {
  const [postText, setPostText] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);


    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ text: postText }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setPostText('');
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Post created successfully!</div>}
      <textarea
        value={postText}
        onChange={event => setPostText(event.target.value)}
      />
      <button className="btn btn-primary">Create Post</button>

    </form>
  );
}

export default CreatePostForm;
