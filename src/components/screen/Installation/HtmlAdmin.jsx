

const HtmlAdmin = () => {
  const copyToClipboard = () => {
    const textToCopy = "Text you want to copy";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };
  const copyThreeClipboard = () => {
    const textToCopy = "two two";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };
  return (
    <div className="w-[828px]">
      <div className="container_fluid">
      
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={copyToClipboard}>
        Copy Text
      </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={copyThreeClipboard}>
        Copy Text
      </button>
    </div>
  );
};

export default HtmlAdmin;