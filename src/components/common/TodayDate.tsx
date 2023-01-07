
const TodayDate = () => {
  let dayArr:string[] = ["일", "월", "화", "수", "목", "금", "토"];
  let today = new Date();
  let day = today.getDay();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  return (
    <p style={{color: '#888',fontSize: '.8rem'}}>
      오늘은 {year}년 {month}월 {date}일 {dayArr[day]}요일 입니다.
    </p>
  );
};

export default TodayDate;
