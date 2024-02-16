import { Character } from './index.js';
import { Bowerman } from './index.js';
import { Swordsman } from './index.js';
import { Magician } from './index.js';
import { Daemon } from './index.js';
import { Undead } from './index.js';
import { Zombie } from './index.js';


// Создаем тестовый файл
/*describe('Класс Character', () => {
    it('Создает объект Character', () => {
      const character = new Character('Имя', 'Тип');
      expect(character).toBeInstanceOf(Character);
    });
  
    it('Проверяет свойства объекта Character', () => {
      const character = new Character('Имя', 'Тип');
      expect(character.name).toBe('Имя');
      expect(character.type).toBe('Тип');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(0);
      expect(character.defence).toBe(0);
    });
  });*/

  describe('Класс Bowerman', () => {
    it('Создает объект Bowerman', () => {
      const bowerman = new Bowerman('Имя');
      expect(bowerman).toBeInstanceOf(Bowerman);
    });
  
    it('Проверяет свойства объекта Bowerman', () => {
      const bowerman = new Bowerman('Имя');
      expect(bowerman.name).toBe('Имя');
      expect(bowerman.type).toBe('Bowerman');
      expect(bowerman.attack).toBe(25);
      expect(bowerman.defence).toBe(25);
    });
  });

  describe('Класс Swordsman', () => {
    it('Создает объект Swordsman', () => {
      const swordsman = new Swordsman('Имя');
      expect(swordsman).toBeInstanceOf(Swordsman);
    });
  
    it('Проверяет свойства объекта Swordsman', () => {
      const swordsman = new Swordsman('Имя');
      expect(swordsman.name).toBe('Имя');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
    });
  });
  
  describe('Класс Magician', () => {
    it('Создает объект Magician', () => {
      const magician = new Magician('Имя');
      expect(magician).toBeInstanceOf(Magician);
    });
  
    it('Проверяет свойства объекта Magician', () => {
      const magician = new Magician('Имя');
      expect(magician.name).toBe('Имя');
      expect(magician.type).toBe('Magician');
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });
  });

  describe('Класс Daemon', () => {
    it('Создает объект Daemon', () => {
      const daemon = new Daemon('Имя');
      expect(daemon).toBeInstanceOf(Daemon);
    });
  
    it('Проверяет свойства объекта Daemon', () => {
      const daemon = new Daemon('Имя');
      expect(daemon.name).toBe('Имя');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
    });
  });

  describe('Класс Undead', () => {
    it('Создает объект Undead', () => {
      const undead = new Undead('Имя');
      expect(undead).toBeInstanceOf(Undead);
    });
  
    it('Проверяет свойства объекта Undead', () => {
      const undead = new Undead('Имя');
      expect(undead.name).toBe('Имя');
      expect(undead.type).toBe('Undead');
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });
  });

  describe('Класс Zombie', () => {
    it('Создает объект Zombie', () => {
      const zombie = new Zombie('Имя');
      expect(zombie).toBeInstanceOf(Zombie);
    });
  
    it('Проверяет свойства объекта Zombie', () => {
      const zombie = new Zombie('Имя');
      expect(zombie.name).toBe('Имя');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
    });
  });
  