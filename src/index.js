import $ from 'jquery';
import './style.css';

function updateTime() {
  const start = 'You\'ve been on this page for ';
  const end = ' seconds.';
  let curTime = 0;
  function updateMsg() {
    const message = start.concat(curTime.toString(), end);
    $('#main').html(message);
    curTime ++;
  }
  setInterval(updateMsg, 1000);
}

updateTime();
