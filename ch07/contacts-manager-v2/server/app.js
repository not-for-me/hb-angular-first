const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT_NUM = 3000;
const apiPrefix = '/api/v1';
const API_KEY_HEADER_NAME = 'X-My-Api-Token';
const TEST_KEY = 'angular-is-awesome';

const isNotAuthorizedRequest = (apiKey) => {
    const isAuthroized = TEST_KEY === apiKey;
    if (!isAuthroized) {
        console.log(`${apiKey} not matched`);
    }
    return !isAuthroized;
};

const generateNewNo = () => {
    let maxNo = 0;
    IN_MEMORY_USER_DB.forEach(user => {
        if (user.no > maxNo) {
            maxNo = user.no;
        }
    });
    return maxNo + 1;
}

/**
 * 테스트용 사용자 배열 객체
 */
let IN_MEMORY_USER_DB = [
    { no: 1, id: 'jwj0831', name: 'Woojin', phoneNum: '010-123-1234', mail: 'jwj0831@gmail.com', birthDate: '', sex: 'M' },
    { no: 2, id: 'kiljulee', name: 'Kilju', phoneNum: '010-123-1234', mail: 'kiljulee@abc.com', birthDate: '', sex: 'M' },
    { no: 3, id: 'coffeenjava', name: 'Jisu', phoneNum: '010-123-1234', mail: 'coffeenjava@naver.com', birthDate: '', sex: 'M' },
    { no: 4, id: 'dsboo', name: 'Dongsig', phoneNum: '010-123-1234', mail: 'dsboo@test.com', birthDate: '', sex: 'M' },
    { no: 5, id: 'hannason', name: 'Hanna', phoneNum: '010-123-1234', mail: 'hannason@test.com', birthDate: '', sex: 'F' }
];

/**
 * 전체 사용자 summary 조회
 */
app.get(`${apiPrefix}/users`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }

    if (IN_MEMORY_USER_DB.length === 0) {
        return res.status(404).send('등록된 사용자가 없습니다.');
    }

    const reduceFn = user => ({ no: user.no, name: user.name, mail: user.mail, phoneNum: user.phoneNum });
    return res.send(IN_MEMORY_USER_DB.map(reduceFn));
});

/**
 * 사용자 no로 조회
 */
app.get(`${apiPrefix}/users/:userNo`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }

    const userNo = Number.parseInt(req.params.userNo);
    console.log(`userNo: ${userNo}`);

    const searchResult = IN_MEMORY_USER_DB.filter(user => user.no === userNo);
    if (searchResult.length === 1) {
        return res.send(searchResult[0]);
    }

    return res.status(404).send(`no: ${userNo}에 해당하는 사용자가 없습니다.`);
});

/**
 * 사용자 업로드
 */
app.post(`${apiPrefix}/users`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }


    const newNo = generateNewNo();
    console.log(`create a new user no: ${newNo}`);
    const newUser = req.body;
    newUser.no = newNo;
    console.log(`created user: ${JSON.stringify(newUser)}`);

    IN_MEMORY_USER_DB.push(newUser);
    return res.send(newUser);
});

app.put(`${apiPrefix}/users/:userNo`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }

    const userNo = Number.parseInt(req.params.userNo);
    console.log(`userNo: ${userNo}`);

    const updatedUser = req.body;
    const idx = IN_MEMORY_USER_DB.findIndex((user) => user.no === userNo);
    console.log(`user memory db idx: ${idx}`);
    IN_MEMORY_USER_DB[idx] = updatedUser;

    return res.send(updatedUser);
});

app.delete(`${apiPrefix}/users/:userNo`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }

    const userNo = Number.parseInt(req.params.userNo);
    console.log(`userNo: ${userNo}`);

    const idx = IN_MEMORY_USER_DB.findIndex((user) => user.no === userNo);
    console.log(`user memory db idx: ${idx}`);

    removedUserList = IN_MEMORY_USER_DB.splice(idx, 1);
    return res.send(removedUserList[0]);
})

app.delete(`${apiPrefix}/users`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    if (isNotAuthorizedRequest(req.get(API_KEY_HEADER_NAME))) {
        return res.status(403).send();
    }

    IN_MEMORY_USER_DB = [];
    return res.send('clear');
});

app.listen(PORT_NUM, () => console.log(`start to listening on port ${PORT_NUM}`));