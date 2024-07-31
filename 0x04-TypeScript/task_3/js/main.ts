/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
const CRUD = require('./crud');

const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
