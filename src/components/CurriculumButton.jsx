import React from 'react';

export const CurriculumButton = ({ text }) => {
  const handleDownload = () => {
    // Adicione o caminho do seu currículo aqui
    const resumePath = 'src/assets/Curriculo.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Curriculo.pdf';
    link.click();
  };

  return (
    <button className='view_link' onClick={handleDownload}>
      {text}
    </button>
  );
};
