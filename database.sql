-- MySQL Workbench Synchronization
-- Generated: 2015-04-15 16:46
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Júlio Pradera

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS,
    UNIQUE_CHECKS = 0;

SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET @OLD_SQL_MODE = @@SQL_MODE,
    SQL_MODE = 'TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `plannera` DEFAULT CHARACTER
   SET utf8 COLLATE utf8_general_ci;


CREATE TABLE IF NOT EXISTS `plannera`.`produtos` (`id` INT(11) NOT NULL AUTO_INCREMENT,
                                                  `codigo` VARCHAR(10) NOT NULL,
                                                  `nome` VARCHAR(45) NOT NULL,
                                                  `qtdVenda` INT(3) NOT NULL,
                                                  PRIMARY KEY (`id`),
                                                  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
                                                  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC))
      ENGINE = InnoDB DEFAULT CHARACTER
         SET = utf8 COLLATE = utf8_general_ci;

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
