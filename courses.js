window.ALL_COURSES = [
  { id:'jee-found', title:'JEE Foundation', category:'JEE', level:'Beginner', duration:'8 weeks', price:2999, description:'Core math & physics for JEE beginners.' },
  { id:'neet-bio', title:'NEET Biology Crash', category:'NEET', level:'Advanced', duration:'6 weeks', price:3499, description:'Intense biology prep with MCQs & PYQs.' },
  { id:'olymp-math', title:'Math Olympiad Prep', category:'Olympiad', level:'Advanced', duration:'12 weeks', price:3999, description:'Problem solving, number theory, combinatorics.' },
  { id:'skills-coding', title:'Coding for Beginners', category:'Skills', level:'Beginner', duration:'4 weeks', price:1999, description:'JavaScript fundamentals with projects.' },
  { id:'found-8', title:'Class 8 Foundation', category:'Foundation', level:'Intermediate', duration:'10 weeks', price:2799, description:'Math & Science fundamentals for Class 8.' }
];

function enroll(courseId){
  const u = currentUser && currentUser();
  if(!u){ alert('Please login to enroll.'); location.href='login.html'; return; }
  const enrollments = JSON.parse(localStorage.getItem('enrollments')||'[]');
  if (enrollments.find(e => e.userId===u.id && e.courseId===courseId)){
    alert('Already enrolled!');
    return;
  }
  enrollments.push({ userId:u.id, courseId:courseId, ts:Date.now() });
  localStorage.setItem('enrollments', JSON.stringify(enrollments));
  alert('Enrolled successfully! Go to your dashboard.');
}