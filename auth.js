function users(){ return JSON.parse(localStorage.getItem('users')||'[]'); }
function saveUsers(u){ localStorage.setItem('users', JSON.stringify(u)); }
function currentUser(){ return JSON.parse(localStorage.getItem('currentUser')||'null'); }
function setCurrentUser(u){ localStorage.setItem('currentUser', JSON.stringify(u)); }
function logout(){ localStorage.removeItem('currentUser'); location.href='index.html'; }

document.addEventListener('DOMContentLoaded', () => {
  const sForm = document.getElementById('signupStudent');
  if (sForm){
    sForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(sForm).entries());
      const list = users();
      if (list.find(x=>x.email===data.email)){ document.getElementById('signupStudentMsg').textContent='Email already used.'; return; }
      const u = { id: 'u_'+Date.now(), name:data.name, email:data.email, password:data.password, role:'student' };
      list.push(u); saveUsers(list); setCurrentUser(u);
      document.getElementById('signupStudentMsg').textContent='Account created! Redirecting...';
      setTimeout(()=>location.href='dashboard-student.html', 800);
    });
  }

  const tForm = document.getElementById('signupTeacher');
  if (tForm){
    tForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(tForm).entries());
      const list = users();
      if (list.find(x=>x.email===data.email)){ document.getElementById('signupTeacherMsg').textContent='Email already used.'; return; }
      const u = { id: 'u_'+Date.now(), name:data.name, email:data.email, password:data.password, role:'teacher', subject:data.subject||'' };
      list.push(u); saveUsers(list); setCurrentUser(u);
      document.getElementById('signupTeacherMsg').textContent='Account created! Redirecting...';
      setTimeout(()=>location.href='dashboard-teacher.html', 800);
    });
  }

  const lForm = document.getElementById('loginForm');
  if (lForm){
    lForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(lForm).entries());
      const u = users().find(x=>x.email===data.email && x.password===data.password && x.role===data.role);
      const msg = document.getElementById('loginMsg');
      if(!u){ msg.textContent='Invalid credentials or role.'; return; }
      setCurrentUser(u);
      msg.textContent='Login successful! Redirecting...';
      setTimeout(()=>{
        if (u.role==='student') location.href='dashboard-student.html';
        else if (u.role==='teacher') location.href='dashboard-teacher.html';
        else location.href='admin.html';
      }, 600);
    });
  }
});