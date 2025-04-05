import {addTodo, deleteTodo, editTodo, getAllTodos, setTodoDone} from '@/api.v2';
import {expect, test} from '@jest/globals';

test('GET all TODOs', async () => {
    const actual = await getAllTodos();
    expect(actual).toEqual([
        {
            "id": "1",
            "text": "Test 1",
            "done": false
        },
        {
            "id": "2",
            "text": "Test 2",
            "done": false
        },
        {
            "id": "3",
            "text": "Test 3",
            "done": false
        }
    ]);
});

test('add a TODO', async () => {
    await addTodo({
        id: "4",
        text: "Test 4",
        done: false
    });
    const actual = await getAllTodos();

    expect(actual).toEqual([
        {
            id: "1",
            text: "Test 1",
            done: false
        },
        {
            id: "2",
            text: "Test 2",
            done: false
        },
        {
            id: "3",
            text: "Test 3",
            done: false
        },
        {
            id: "4",
            text: "Test 4",
            done: false
        }
    ]);
});

test('edit a TODO', async () => {
    await editTodo({
        id: "2",
        text: "Test 2 edited",
        done: false
    });
    const actual = await getAllTodos();

    expect(actual).toEqual([
        {
            id: "1",
            text: "Test 1",
            done: false
        },
        {
            id: "2",
            text: "Test 2 edited",
            done: false
        },
        {
            id: "3",
            text: "Test 3",
            done: false
        },
        {
            id: "4",
            text: "Test 4",
            done: false
        }
    ]);
});

test('set a TODO done field', async () => {
    await setTodoDone({
        id: "2",
        text: "Test 2 edited",
        done: false,
    }, true);

    const actual = await getAllTodos();

    expect(actual).toEqual([
        {
            id: "1",
            text: "Test 1",
            done: false
        },
        {
            id: "2",
            text: "Test 2 edited",
            done: true
        },
        {
            id: "3",
            text: "Test 3",
            done: false
        },
        {
            id: "4",
            text: "Test 4",
            done: false
        }
    ]);
});

test('delete a TODO', async () => {

    await deleteTodo('2');
    const actual = await getAllTodos();

    expect(actual).toEqual([
        {
            id: "1",
            text: "Test 1",
            done: false
        },
        {
            id: "3",
            text: "Test 3",
            done: false
        },
        {
            id: "4",
            text: "Test 4",
            done: false
        }
    ]);
});