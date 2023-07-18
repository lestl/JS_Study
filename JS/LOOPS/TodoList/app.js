let quit = 0;
let list = [];

while (quit === 0){
    let command = prompt('커맨드를 입력해주세요. new, list, delete, quit');
    if (command === 'new'){
        let listMt = prompt('만들 요소를 입력해주세요.');
        list.push(listMt);
        console.log(`[${listMt}]를 추가하였습니다.`);
    }
    else if(command === 'list'){
        
        console.log('*****************');
        for(i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
        }
        
        if(list.length === 0){
            console.log('비었습니다');
        }
        console.log('*****************');
    }
    else if(command === 'delete'){
        let del = prompt('삭제할 인덱스를 입력하세요.');
        console.log(`[${list[del]}]를 삭제하였습니다.`)
        list.splice(del);
        
    }
    else if(command === 'quit'){
        break;
    }
}
console.log('종료되었습니다.');