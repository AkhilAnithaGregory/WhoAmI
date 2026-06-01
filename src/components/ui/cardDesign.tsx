function CardDesign({ content }: { content: React.ReactNode }) {
  return (
    <div className="card">
      <div className="bg bg-white dark:bg-[#020817]"></div>
      <div className="blob"></div>
      <div className="content">{content}</div>
    </div>
  );
}

export default CardDesign;
