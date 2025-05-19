import React from "react";

interface SocialShareButtonProps {
  children: React.ReactNode;
  platform?: 'slack' | 'twitter' | 'linkedin' | 'link';
  url?: string;
  title?: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({ 
  children, 
  platform, 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = ''
}) => {
  const handleShare = () => {
    if (typeof window === 'undefined') return;
    
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'slack':
        shareUrl = `https://slack.com/share?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'link':
        navigator.clipboard.writeText(url)
          .then(() => {
            alert('Bağlantı panoya kopyalandı!');
          })
          .catch(err => {
            console.error('Bağlantı kopyalanamadı: ', err);
          });
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button 
      className="flex justify-center items-center w-8 h-8 border-r border-l border-solid border-x-black/10 dark:border-x-white/10 text-slate-800 dark:text-slate-200"
      onClick={handleShare}
      aria-label={`${platform ? platform + ' ile paylaş' : 'Paylaş'}`}
    >
      <div>{children}</div>
    </button>
  );
};

export default SocialShareButton;
