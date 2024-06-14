-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2024 at 10:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc`
--

-- --------------------------------------------------------

--
-- Table structure for table `configuracoes_quiz`
--

CREATE TABLE `configuracoes_quiz` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `tipo_questao` varchar(50) NOT NULL,
  `numero_questoes` int(11) NOT NULL,
  `dificuldade` enum('Facil','Medio','Dificil') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `imagens`
--

CREATE TABLE `imagens` (
  `id` int(11) NOT NULL,
  `questao_id` int(11) DEFAULT NULL,
  `imagem_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `metas_semanais`
--

CREATE TABLE `metas_semanais` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `semana` int(11) NOT NULL,
  `pontuacao_meta` int(11) NOT NULL,
  `pontuacao_atual` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `opcoes_resposta`
--

CREATE TABLE `opcoes_resposta` (
  `id` int(11) NOT NULL,
  `opcao` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questoes`
--

CREATE TABLE `questoes` (
  `id` int(11) NOT NULL,
  `enunciado` varchar(255) NOT NULL,
  `materia` varchar(255) NOT NULL,
  `dificuldade` enum('Facil','Medio','Dificil') NOT NULL,
  `tema` varchar(255) NOT NULL,
  `ano_prova` date DEFAULT NULL,
  `opcoes_resposta_id` int(11) DEFAULT NULL,
  `resposta_correta` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `vestibular` varchar(255) DEFAULT NULL,
  `disciplina` varchar(255) DEFAULT NULL,
  `conteudo` varchar(255) DEFAULT NULL,
  `topico` varchar(255) DEFAULT NULL,
  `ano` int(11) DEFAULT NULL,
  `enunciado_imagens_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recordes`
--

CREATE TABLE `recordes` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `questao_id` int(11) NOT NULL,
  `pontuacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `data_nasc` date NOT NULL,
  `papel` enum('admin','professor','aluno') DEFAULT 'aluno'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `senha`, `email`, `data_nasc`, `papel`) VALUES
(1, 'admin', '$2b$10$FfjBp2tGBxJ8ocrbT4n4suKLIJePaecBlYpn9ZYi6w5eJJkvds6y2', 'admin@gmail.com', '2006-10-09', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `configuracoes_quiz`
--
ALTER TABLE `configuracoes_quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `imagens`
--
ALTER TABLE `imagens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questao_id` (`questao_id`);

--
-- Indexes for table `metas_semanais`
--
ALTER TABLE `metas_semanais`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `opcoes_resposta`
--
ALTER TABLE `opcoes_resposta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questoes`
--
ALTER TABLE `questoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_opcoes_resposta` (`opcoes_resposta_id`),
  ADD KEY `fk_enunciado_imagens` (`enunciado_imagens_id`);

--
-- Indexes for table `recordes`
--
ALTER TABLE `recordes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `questao_id` (`questao_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `configuracoes_quiz`
--
ALTER TABLE `configuracoes_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imagens`
--
ALTER TABLE `imagens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metas_semanais`
--
ALTER TABLE `metas_semanais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `opcoes_resposta`
--
ALTER TABLE `opcoes_resposta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questoes`
--
ALTER TABLE `questoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recordes`
--
ALTER TABLE `recordes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `configuracoes_quiz`
--
ALTER TABLE `configuracoes_quiz`
  ADD CONSTRAINT `configuracoes_quiz_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `imagens`
--
ALTER TABLE `imagens`
  ADD CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`questao_id`) REFERENCES `questoes` (`id`);

--
-- Constraints for table `metas_semanais`
--
ALTER TABLE `metas_semanais`
  ADD CONSTRAINT `metas_semanais_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `questoes`
--
ALTER TABLE `questoes`
  ADD CONSTRAINT `fk_enunciado_imagens` FOREIGN KEY (`enunciado_imagens_id`) REFERENCES `imagens` (`id`),
  ADD CONSTRAINT `fk_opcoes_resposta` FOREIGN KEY (`opcoes_resposta_id`) REFERENCES `opcoes_resposta` (`id`);

--
-- Constraints for table `recordes`
--
ALTER TABLE `recordes`
  ADD CONSTRAINT `recordes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `recordes_ibfk_2` FOREIGN KEY (`questao_id`) REFERENCES `questoes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
