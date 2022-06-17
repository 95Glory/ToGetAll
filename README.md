# FullStack 중간 프로젝트 -4조👩‍👩‍👦‍👦
## <22-06-10 ~ 22-06-17>

## 혼자 먹지말고 같이 먹어요! ToGet:All  🍽️

## 01. 팀원  소개 😁
* 서예원 (GitHub : https://github.com/woodybuzz02)  
 
* 김영광 (GitHub : https://github.com/Glory02)  
 
* 백체은 (GitHub : https://github.com/sairo415)  

* 박미희 (GitHub : https://github.com/PMH2906)

* 원종혁 (GitHub : https://github.com/Gaboza-JH) 
  
## 02. 프로젝트 소개 📋 
### ToGet:All 
![20220616_205455](https://user-images.githubusercontent.com/102516088/174064437-6ce49791-e527-4bb9-b028-a2a2db513c65.png)

다양한 이유로 고향을 떠나 먼 타지에서 혼자 생활하는 사람들 즉 1인가구가 증대함에 따라 혼자 밥을 먹는 사람 이른바, 혼밥족들이 점차 증가함에 있다. 
혼밥이 흔하다고는 하지만 여전히 불편하고 비용적으로 부담스러운 부분도 많아서 점점 끼니를 걸러 불규칙한 식사를 하거나 시리얼, 맨날 똑같은 음식을 먹는날이 대부분이다. 
우리는 이를 해결하고자 혼자 외롭게 매일 식사하는 사람들 혹은 혼자 먹기에 부담스러워 매일 미루고 왔던 사람들에게 이 서비스를 제공하여 서로가 이점을 얻고 좀 더 행복한 식사시간을 제공하고자 한다.

요즈음 C2C 서비스(당근마켓, 번개장터 등)가 유행 중에 있다. 심지어 사용자들끼리 연인을 맺어주는 서비스도 존재한다. 하지만, 식사를 같이할 사람들을 모우느 게시물이나 사람끼리 연결해주는 구체적인 서비스가 부족하는것을 깨닫고 전문적인 서비스를 제공하고자 하였다.

1)원하는 지역 및 음식 카테고리 설정<br>
2)오픈 채팅방을 통한 매칭<br>
3)숨겨진 맛집 공유<br>

##  04. TechStack🛠️
### frontend<br>
Next.js / Javascript / React / HTML / CSS<br>
### backend<br>
Spring Framework / MySQL / Spring Boot<br>

## 05. Requirements🤔

### 1) 회원가입

### 2) 로그인

### 3) 카카오 지도 API를 활용 및 키워드 기능을 활용한 검색

### 4) 지도에서 조건값 설정하여 고객의 니즈에 맞는 채팅방 추천 기능

### 5)  실시간 채팅이 가능한 채팅기능 구현 

### 6)  soket을 활용하여 웹 페이지간 경로이동 및 서버와의 통신

-miro 링크:https://miro.com/app/board/uXjVOuFPfJI=/?share_link_id=145815630454

## 05. ER Diagram
![image](https://user-images.githubusercontent.com/102516088/174066865-c6e5b923-ade9-4119-bab6-b8c36efcd2d5.png)

## 06. Domain📋
**[Users Table]** 

**id** : 데이터베이스에서 자동으로 입력되는 식별용 번호<br>
**userId** : 회원가입할 때 사용자가 입력하는 아이디<br>
**pw**: 비밀번호<br>
**name**: 사용자 이름<br>
**nickName** : 채팅방에서 보여질 이름<br>
**preferFoodCategory** : 선호하는 음식 종류<br>
**location** : 거주 지역<br>
**cautionCount** : 신고 당한 횟수<br>

---
**[Chat Table]** 

**chatNum** : 채팅방식별용 번호<br>
**location** : 참여하고 싶은 식사 모임의 위치<br>
**foodCategory** : 참여하고 싶은 식사 모임의 음식 종류<br>
**title** : 채팅방 이름<br>
**limitedPerson** : 채팅방 제한 인원<br>

## 07. TROUBLE SHOOTING😥
1. 로그인 세션
**Session을 활용하여 자체 로그인 서비스를 구현**하고 싶었으나, 짧은 시간 동안 네트워크 학습을 하기에 어려움이 있었다. 대안으로 **OAuth로 카카오 로그인 API를 활용하고자 했으나** 필수적으로 구현해야 하는 기능들이 있어 충분히 시간을 투자할 수 없어 **적용하지 못했다.**

2. router 이용하여 페이지 이동 시, 카카오 key 값 인식 오류

3. socket통신을 이용한 실시간 채팅 웹 구현 및 배포
**기획 단계에서는 회원은 여러 명의 다른 회원과 통신을 할 수 있고, 여러 채팅방에 참여할 수 있었다.** 그러나 이를 실제로 구현하기 위해서는 **서버가 배포되어야 했는데, 이 부분에 대한 학습이 선행되지 않아 socket 통신을 활용하기로 하였다.**  
(https://github.com/hj3437/study_node_socket_io)의 채팅 프로그램 코드를 참조하여 **여러 명이 통신을 할 수 있게 하였으나, 여러 채팅방을 열 수는 없어 모두 같은 채팅방으로 이동하게 되는 현상이 현재 문제점**으로 삼고있다.

4. kakao map api 📺

5. API에 대한 FrontEnd CSS 적용<br>
![chatting](https://user-images.githubusercontent.com/102516088/174077587-377e80d0-1a4b-4caa-84dc-d9873c8c5a00.gif)

## 08. 추가시킬 기능들
1. 마이페이지 수정
2. 로그인시 네비게이션바 변화
3. 선입금 기능(보증금 용도)
4. 신고기능
5. 블랙리스트 테이블 구현
6. user의 DB 분석 후 선호 음식과 지역 통계하는 페이지 

## 09. Review📢

### 서예원👨
이번 프로젝트하면서 협력하는 것에 대해 많은 생각을 하게 되었다.
팀원들이 있다는 점은 든든하기도 하지만 별로 도움이 되지않는 다는 생각이 들 때 속상하기도 하다. 부지런히 공부해야겠다는 생각도 들고 그래도 내가 몰랐던 지식들을 많이 알아서 좋았다.

---

### 김영광  🧑
프로젝트를 시작하기 전, 몇 달동안 배운 지식을 다양한 방면으로 이용해보고 싶었지만, 프론트 엔드쪽을 맡은 순간 그 욕심은 정말 미친 짓임을 깨닫게 되었다. 이번 프로젝트에서 다들 실력이 훌륭한 팀원들이라서 사전에 많은 공부를 하고 갔었음에도 불구하고 도움이 많이 못되어드린것 같아 죄송한 마음이 크다. 이번 프로젝트를 하면서 많은걸 깨닫게 되었다 그 중 제일 많이 깨닫게 된 건 신입개발자들에게 요구되는 사항이 물론 코딩실력이면 좋지만 인터넷 검색, 어려운 공식문서 읽기, 오픈소스를 커스텀하는 실력이 중요할 것 같다는 생각이 크게 들었다.

---

### 백체은👦
정말 많은 것을 배운 프로젝트였다. 처음의 기획에 비해 쪼그라들었지만 페이지 이동, CRUD 등 배웠던 것을 실제로 우리의 서비스에 활용해보면서 즐거웠다. 뜻대로 되지 않아 답답한 순간도 있었지만, 기능 하나하나를 구현할 때마다 느낀 기쁨이 모든 걸 상쇄했다. 누가 힘들 때 누군가는 긍정적인 힘을 불어넣어 줄 수 있다는 게 협업의 최대 장점이었고, FE와 BE를 연결하며 어느 분야에서 일하게 되든 기본은 알아야 한다는 걸 체감했다. 열정적인 팀원들 덕분에 한층 성장한 것 같아 고맙다.

---

### 박미희 👧
이번에는 프론트 / 백엔드의 구분을 두지 않고 풀스택으로 서로 유기적으로 연결하는 프로젝트를 하게 되면서 각 파트별로의 이해도가 한 층 깊어지는 너무나 좋은 경험이였다. 그 과정이 결코 쉽지 않았지만, 좋은 팀원들을 만나 서로 격려하며 협업한 덕분에 모든 기능 구현을 잘 마무리 할 수 있었다. 처음 계획한 기능들을 하나씩 구현해 나갈때마다 뿌듯했고, 강사님 말씀대로 배운 지식을 바탕으로 실제로 적용시키는 것이 나의 실력을 업그레이드 시킬 수 있다는 조언이 확 와닿는 경험이였다.

---

### 원종혁 👶
미니프로젝트가 아닌 정해진 아이디어를 통해 backend의 데이터 테이블 구성부터 fronted까지 처음부터 끝까지 협업을 통해서 팀원들과 의견을 조율하는 방법, 일의 순서를 정하고 처리하는 방법, 대화하는 방법 등 다방면으로 지식을 얻을 수 있는 값진 경험을 해서 좋았습니다. 내일 당장이 전혀 보이지 않는 불안감과 막막한 순간부터 시작했지만, 프로젝트가 진행됨에 따라 조금씩 성장하는 제 모습을 보고 꾸준히 하다 보면 뭐라도 되는구나 하는 자신감과 오랜 고민 끝에 생각한 것과 코드가 같이 돌아갈 때 느낄 수 있는 쾌감을 통해 흥미를 붙이는 계기가 되었습니다. 무엇보다 의지와 열정가득한 팀원들과 함께해서 너무 행복했습니다:) 


## 10. REFERENCE
kakao map api : https://apis.map.kakao.com/web/sample/keywordList/<br>
FrontEnd : https://www.youtube.com/c/LamaDev <br>
Backend : 유정호 강사님 자료😍<br>
kakao login api : https://cpro95.tistory.com/516(failed)<br>
Heroku 배포 : https://velog.io/@ksmfou98/node.js-express-socket.io-heroku%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0<br>
              https://rateye.tistory.com/1458<br>
실시간 Chat : https://github.com/hj3437/study_node_socket_io <br>
