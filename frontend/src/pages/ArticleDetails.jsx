import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  FacebookShareButton, TwitterShareButton, LinkedinShareButton, 
  FacebookIcon, TwitterIcon, LinkedinIcon 
} from 'react-share';

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [comment, setComment] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/articles/${id}`);
        setArticle(res.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/articles/${id}/comments`, { content: comment });
      setArticle(res.data);
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleShare = async (platform) => {
    try {
      await axios.post(`/api/articles/${id}/share`);
      // You might want to update the local state here
    } catch (error) {
      console.error('Error updating share count:', error);
    }
  };

  if (!article) return <div>Loading...</div>;

  const shareUrl = `${window.location.origin}/articles/${id}`;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Verified by: {article.verifiedBy}</p>
      <div>{article.content}</div>
      
      <div>
        <h3>Share this article:</h3>
        <FacebookShareButton url={shareUrl} onClick={() => handleShare('facebook')}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} onClick={() => handleShare('twitter')}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} onClick={() => handleShare('linkedin')}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>

      <div>
        <h3>Comments</h3>
        {article.comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
            <small>By: {comment.user.username}</small>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit}>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default ArticleDetails;