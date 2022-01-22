
const BTNID = '#btnId';
const CHUNSIKIMG = "https://item.kakaocdn.net/do/b5d3d6a7b67fbf5afdaffb79fffbf8b14022de826f725e10df604bf1b9725cfd";
const NAVER = "https://www.naver.com/"

// 일반적인 공유
const custom = {
    container: BTNID,
    objectType: 'feed',
    content: {
      title: '타이틀타이틀',
      description: '설명설명',
      imageUrl: CHUNSIKIMG,
      link: {
        mobileWebUrl: NAVER,
        webUrl: NAVER,
      },
    },
    social: {
      likeCount: 77,
      commentCount: 55,
      sharedCount: 333,
    },
    buttons: [
      {
        title: '버튼1',
        link: {
          mobileWebUrl: NAVER,
          webUrl: NAVER,
        },
      },
      {
        title: '버튼2',
        link: {
          mobileWebUrl: NAVER,
          webUrl: NAVER,
        },
      }
    ],
}

// 리스트 형식 
// 리스트는 1개~3개까지 가능
const list = {
    container: BTNID,
    objectType: 'list',
    headerTitle: '춘식 리스트',
    headerLink: {
        mobileWebUrl: NAVER,
        webUrl: NAVER,
    },
    contents: [
        {
            title: '첫번째 아이템 제목',
            description: '첫번째 아이템 설명',
            imageUrl:CHUNSIKIMG,
            link: {
                mobileWebUrl: NAVER,
                webUrl: NAVER,
            },
        },
        {
            title: '두번째 아이템 제목',
            description: '두번째 아이템 설명',
            imageUrl:CHUNSIKIMG,
            link: {
                mobileWebUrl: NAVER,
                webUrl: NAVER,
            },
            },
        {
            title: '세번째 아이템 제목',
            description: '세번째 아이템 설명',
            imageUrl:CHUNSIKIMG,
            link: {
                mobileWebUrl: NAVER,
                webUrl: NAVER,
            },
        },
    ],
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: NAVER,
            webUrl: NAVER,
        },
        },
        {
        title: '앱으로 보기',
        link: {
            mobileWebUrl: NAVER,
            webUrl: NAVER,
        },
        },
    ],
}

// 피드 
// 0개~5개
const feed = {
    container: BTNID,
    objectType: 'feed',
    content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:CHUNSIKIMG, // 최상단 이미지
        link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
        },
    },
    itemContent: {
        profileText: 'Hello',
        profileImageUrl: CHUNSIKIMG, // 중간 이미지
        titleImageUrl: CHUNSIKIMG, // 마지막 이미지
        titleImageText: 'Product Name',
        titleImageCategory: 'Category',
        items: [
            {
                item: 'option1',
                itemOp: '1000원',
            },
            {
                item: 'option2',
                itemOp: '2000원',
            },
            {
                item: 'option3',
                itemOp: '3000원',
            },
            {
                item: 'option4',
                itemOp: '4000원',
            },
            {
                item: 'option5',
                itemOp: '5000원',
            },
        ],
        sum: 'Total',
        sumOp: '15000원',
    },
    social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
    },
    buttons: [
        {
        title: '웹으로 이동',
        link: {
            mobileWebUrl: NAVER,
        },
        },
        {
        title: '앱으로 이동',
        link: {
            mobileWebUrl: NAVER,
        },
        },
    ]
}

// 위치
// 주소 기반으로 검색
const location2 = {
    container: BTNID,
    objectType: 'location',
    address: '경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층',
    addressTitle: '카카오 판교오피스 카페톡',
    content: {
        title: '카카오 카페',
        description: '카페 설명',
        imageUrl:CHUNSIKIMG,
        link: {
        mobileWebUrl: NAVER,
        webUrl: NAVER,
        },
    },
    social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
    },
    // 버튼은 최대 1개만 가능
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: NAVER,
            webUrl: NAVER,
        },
        },
    ],
}

// 커머스 상품
const commerce = {
    container: BTNID,
    objectType: 'commerce',
    content: {
        title: '타이틀',
        imageUrl:CHUNSIKIMG,
        link: {
        mobileWebUrl: NAVER,
        webUrl: NAVER,
        },
    },
    commerce: {
        productName: '춘식',
        regularPrice: 100000,
        discountRate: 10,
        discountPrice: 90000
    },
    buttons: [
        {
        title: '구매하기',
        link: {
            mobileWebUrl: NAVER,
            webUrl: NAVER,
        },
        },
        {
        title: '공유하기',
        link: {
            mobileWebUrl: NAVER,
            webUrl: NAVER,
        },
        },
    ],
}

Kakao.init("kakao javaScript key");
Kakao.Link.createDefaultButton(custom);

