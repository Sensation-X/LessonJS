// Тесты

// let assert = require('chai').assert

describe('sum', function() {
    it('Проверка типа данных', function() {
        assert.typeOf(sum(2, 2), 'boolean');
    });
});

describe('arr', function() {
    it('Получение элемента массива', function() {
        assert.equal(num, 5);
    });
});

describe('array', function() {
	it('Проверка типа данных', function() {
		assert.typeOf(each(array, myFunc), 'array');
	});

	it('Проверка на ожидаемый результат', function() {
		assert.deepEqual(each(array, myFunc), [8, 7, 6, 5, 4]);
	});

	it('Проверка на свойство length', function() {
		assert.lengthOf(each(array, myFunc), 5);
	});
});

// JEST

// const exam = require('..src/script.js');

// describe('First test', () => {
//     it(`Проверяем тип данных`, () => {
//         const { sum: sum } = exam;
//         /* Correct input */
//         expect(typeof sum(2,2)).toEqual("boolean");
//     });
// });
// describe('Second test', () => {
//     it(`Получаем элемент массива`, () => {
//         /* Correct input */
//         expect(exam.num).toEqual(5);
//     });
// });
// describe('Third test', () => {
//     it(`Проверяем тип данных`, () => {
//         // const { myFunc: myFunc } = exam;
//         // const { each: each } = exam;
//         /* Correct input */
//         expect(typeof exam.array).toEqual("object");
//     });
//     it(`Проверяем на ожидаемый результат`, () => {
//         const { myFunc: myFunc } = exam;
//         const { each: each } = exam;
//         /* Correct input */
//         expect(each(exam.array, myFunc)).toEqual([8, 7,6,5,4]);
//     });
//     it(`Проверяем на свойство length`, () => {
//         const { myFunc: myFunc } = exam;
//         const { each: each } = exam;
//         /* Correct input */
//         expect(each(exam.array, myFunc).length).toEqual(5);
//     });
// });