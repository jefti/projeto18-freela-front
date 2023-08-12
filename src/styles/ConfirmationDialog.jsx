import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Importe o estilo CSS da biblioteca

const ConfirmationDialog = ({ onConfirm }) => {
  const handleConfirm = () => {
    confirmAlert({
      title: 'Confirmação',
      message: 'Você deseja ser redirecionado para a página de login?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => onConfirm(true),
        },
        {
          label: 'Não',
          onClick: () => onConfirm(false),
        },
      ],
    });
  };

  return (
    <button onClick={handleConfirm}>Acessar com confirmação</button>
  );
};

export default ConfirmationDialog;