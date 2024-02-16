import { Character } from '../class/Character';

describe('Класс Character', () => {
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
  });
  