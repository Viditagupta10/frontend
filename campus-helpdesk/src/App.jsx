import { useState } from 'react'

const initialUsers = [
  { id: 1, name: 'Vidhi Gupta', email: 'vidhi@amity.edu', password: '1234', role: 'student', studentId: 'A2305', avatar: 'V' },
  { id: 2, name: 'Keshav Sharma', email: 'keshav@amity.edu', password: '1234', role: 'student', studentId: 'A2306', avatar: 'K' },
  { id: 3, name: 'Admin', email: 'admin@amity.edu', password: 'admin123', role: 'admin', studentId: '-', avatar: 'A' }
]

const initialNotices = [
  { id: 1, title: 'Fee Submission Deadline', date: '2026-06-15', category: 'Fees', description: 'Last date to submit semester fees is 15th June 2026. Late fine will be applicable after the due date.' },
  { id: 2, title: 'End Semester Exam Timetable Released', date: '2026-06-10', category: 'Exam', description: 'End semester examination timetable has been released. Check the notice board for details.' },
  { id: 3, title: 'Hostel Curfew Reminder', date: '2026-06-08', category: 'Hostel', description: 'All hostel students must return by 10:00 PM. Strict action will be taken against violators.' },
  { id: 4, title: 'Placement Orientation Session', date: '2026-06-13', category: 'Placement', description: 'A placement orientation session will be conducted for final-year students. Attendance is recommended.' }
]

const initialTickets = [
  { id: 1, studentId: 'A2305', student: 'Vidhi Gupta', email: 'vidhi@amity.edu', issue: 'Fee receipt not generated', status: 'Open', date: '2026-06-12', private: false },
  { id: 2, studentId: 'A2306', student: 'Keshav Sharma', email: 'keshav@amity.edu', issue: 'Library card not issued', status: 'Resolved', date: '2026-06-10', private: false },
  { id: 3, studentId: 'A2305', student: 'Vidhi Gupta', email: 'vidhi@amity.edu', issue: 'Hostel room maintenance issue', status: 'Open', date: '2026-06-11', private: true }
]

const initialDocs = [
  { id: 1, name: 'Admission Brochure.pdf', date: '2026-06-01', size: '2.4 MB' },
  { id: 2, name: 'Fee Structure 2026.pdf', date: '2026-06-02', size: '1.1 MB' },
  { id: 3, name: 'MCA Syllabus.pdf', date: '2026-06-03', size: '3.2 MB' },
  { id: 4, name: 'Hostel Rules 2026.pdf', date: '2026-06-04', size: '0.8 MB' }
]

const CATEGORIES = ['General', 'Fees', 'Exam', 'Admission', 'Placement', 'Hostel']

const categoryColor = (cat) => {
  const map = { General: '#6c757d', Fees: '#0084ff', Exam: '#764ba2', Admission: '#00aa00', Placement: '#ff8800', Hostel: '#e91e63' }
  return map[cat] || '#888'
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function LoginPage({ onLogin, users }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (!email || !password) { setError('Please fill in all fields!'); return }
    if (!isValidEmail(email)) { setError('Please enter a valid email address!'); return }
    setLoading(true)
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password)
      if (user) { onLogin(user) }
      else { setError('Invalid email or password!'); setLoading(false) }
    }, 1000)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ position: 'fixed', top: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(102,126,234,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
      <div style={{ position: 'fixed', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(118,75,162,0.1)', borderRadius: '50%', filter: 'blur(80px)' }} />
      <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', padding: '45px 40px', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', width: '400px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '75px', height: '75px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '20px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(102,126,234,0.4)', marginBottom: '16px' }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '32px' }}>A</span>
          </div>
          <h2 style={{ margin: '0 0 6px 0', color: 'white', fontSize: '24px', fontWeight: '700' }}>Amity University</h2>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>AI-Powered Campus Helpdesk Portal</p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Email Address</label>
          <div style={{ position: 'relative' }}>
            <input style={{ width: '100%', padding: '13px 16px 13px 44px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} placeholder="yourname@amity.edu" value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
            <span style={{ position: 'absolute', left: '14px', top: '14px', fontSize: '16px' }}>📧</span>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input style={{ width: '100%', padding: '13px 50px 13px 44px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} placeholder="Enter your password" type={show ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value); setError('') }} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
            <span style={{ position: 'absolute', left: '14px', top: '14px', fontSize: '16px' }}>🔒</span>
            <span onClick={() => setShow(!show)} style={{ position: 'absolute', right: '14px', top: '13px', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '13px', userSelect: 'none' }}>{show ? 'Hide' : 'Show'}</span>
          </div>
        </div>

        {error && <div style={{ background: 'rgba(255,68,68,0.15)', border: '1px solid rgba(255,68,68,0.3)', padding: '12px', borderRadius: '10px', color: '#ff6b6b', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>{error}</div>}

        <button style={{ width: '100%', padding: '14px', background: loading ? 'rgba(102,126,234,0.5)' : 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: '700', boxShadow: '0 8px 25px rgba(102,126,234,0.4)' }} onClick={handleLogin}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: 'rgba(255,255,255,0.6)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Demo Credentials</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Student</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: '600' }}>vidhi@amity.edu / 1234</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Admin</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: '600' }}>admin@amity.edu / admin123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header({ user, onLogout, isAdmin }) {
  return (
    <div style={{ background: isAdmin ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'linear-gradient(135deg, #302b63, #0f0c29)', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '65px', boxShadow: '0 2px 20px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: 'white' }}>A</div>
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700' }}>Amity University</h3>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{isAdmin ? 'Administrator Panel' : 'Campus Helpdesk'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'white', fontSize: '13px', fontWeight: '600' }}>{user.name}</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{user.email}</p>
        </div>
        <div style={{ width: '38px', height: '38px', background: isAdmin ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '15px', border: '2px solid rgba(255,255,255,0.2)' }}>
          {user.avatar}
        </div>
        <button onClick={onLogout} style={{ padding: '8px 18px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>Logout</button>
      </div>
    </div>
  )
}

function StudentPage({ user, onLogout, notices, tickets, setTickets }) {
  const [messages, setMessages] = useState([{ text: 'Hello ' + user.name + '! I am your Campus AI Assistant. How can I help you today?', sender: 'ai' }])
  const [input, setInput] = useState('')
  const [page, setPage] = useState('chat')
  const [ticketText, setTicketText] = useState('')
  const [ticketCategory, setTicketCategory] = useState('General')
  const [isPrivate, setIsPrivate] = useState(false)
  const [ticketSent, setTicketSent] = useState(false)
  const [typing, setTyping] = useState(false)

  const sendMessage = () => {
    if (input.trim() === '') return
    const studentMsg = { text: input, sender: 'student' }
    const lower = input.toLowerCase()
    let reply = "I am sorry, I do not have specific information on that. Please raise a ticket and our helpdesk team will assist you shortly."
    if (lower.includes('fee')) reply = "The fee submission deadline is 15th June 2026. Late fine will be applicable after the due date. Please visit the finance office or pay online through the student portal."
    else if (lower.includes('exam') || lower.includes('timetable')) reply = "The end semester examination timetable has been released. Please check the Notices section for the complete schedule."
    else if (lower.includes('hostel')) reply = "Hostel curfew time is 10:00 PM. All students must return before that. For room related issues, please raise a ticket."
    else if (lower.includes('library')) reply = "The library is open from 9:00 AM to 6:00 PM on all working days. You can access e-resources 24/7 through the student portal."
    else if (lower.includes('admission')) reply = "For admission related queries, please contact the admission office at Block A, Ground Floor or email admissions@amity.edu."
    else if (lower.includes('syllabus')) reply = "The syllabus is available on the college portal under your department section. You can also check the Documents section."
    else if (lower.includes('placement')) reply = "The placement orientation session is scheduled. Please check the Notices section for details and attend compulsorily."
    else if (lower.includes('hello') || lower.includes('hi')) reply = "Hello " + user.name + "! How can I assist you today?"
    setMessages(prev => [...prev, studentMsg])
    setTyping(true)
    setTimeout(() => { setMessages(prev => [...prev, { text: reply, sender: 'ai' }]); setTyping(false) }, 1000)
    setInput('')
  }

  const submitTicket = () => {
    if (ticketText.trim() === '') return
    setTickets(prev => [...prev, { id: prev.length + 1, studentId: user.studentId, student: user.name, email: user.email, category: ticketCategory, issue: ticketText, status: 'Open', date: new Date().toISOString().split('T')[0], private: isPrivate }])
    setTicketText('')
    setIsPrivate(false)
    setTicketSent(true)
    setTimeout(() => setTicketSent(false), 3000)
  }

  const myTickets = tickets.filter(t => t.studentId === user.studentId)
  const navItems = [{ key: 'chat', label: 'AI Chat' }, { key: 'notices', label: 'Notices' }, { key: 'ticket', label: 'Raise Ticket' }, { key: 'mytickets', label: 'My Tickets' }]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: "'Segoe UI', sans-serif" }}>
      <Header user={user} onLogout={onLogout} isAdmin={false} />
      <div style={{ maxWidth: '850px', margin: 'auto', padding: '25px' }}>
        <div style={{ background: 'linear-gradient(135deg, #302b63, #0f0c29)', borderRadius: '16px', padding: '22px 28px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 4px 0', color: 'white', fontSize: '20px' }}>Welcome back, {user.name}!</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Student ID: {user.studentId} | {user.email}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0 0 2px 0', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>My Tickets</p>
            <p style={{ margin: 0, color: 'white', fontSize: '24px', fontWeight: '800' }}>{myTickets.length}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', background: 'white', padding: '6px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)} style={{ flex: 1, padding: '11px', background: page === item.key ? 'linear-gradient(135deg, #302b63, #0f0c29)' : 'transparent', color: page === item.key ? 'white' : '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {page === 'chat' && (
          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg, #302b63, #0f0c29)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '12px' }}>AI</div>
              <div>
                <p style={{ margin: 0, color: 'white', fontWeight: '700', fontSize: '14px' }}>Campus AI Assistant</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Powered by Amity Helpdesk</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%' }}></div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Online</span>
              </div>
            </div>
            <div style={{ height: '400px', overflowY: 'auto', padding: '20px', background: '#f8f9ff' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'student' ? 'flex-end' : 'flex-start', marginBottom: '14px', alignItems: 'flex-end', gap: '8px' }}>
                  {msg.sender === 'ai' && <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #302b63, #0f0c29)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: '800', flexShrink: 0 }}>AI</div>}
                  <div style={{ background: msg.sender === 'student' ? 'linear-gradient(135deg, #302b63, #0f0c29)' : 'white', color: msg.sender === 'student' ? 'white' : '#333', padding: '12px 16px', borderRadius: msg.sender === 'student' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', maxWidth: '72%', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', fontSize: '14px', lineHeight: '1.5' }}>{msg.text}</div>
                  {msg.sender === 'student' && <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '800', flexShrink: 0 }}>{user.avatar}</div>}
                </div>
              ))}
              {typing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #302b63, #0f0c29)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: '800' }}>AI</div>
                  <div style={{ background: 'white', padding: '12px 16px', borderRadius: '18px 18px 18px 4px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      {[0, 1, 2].map(i => <div key={i} style={{ width: '7px', height: '7px', background: '#aaa', borderRadius: '50%' }} />)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: '16px 20px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '10px', background: 'white' }}>
              <input style={{ flex: 1, padding: '12px 16px', borderRadius: '25px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Ask anything about campus..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
              <button style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #302b63, #0f0c29)', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: '700', fontSize: '14px' }} onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        {page === 'notices' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px' }}>Latest Notices</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + categoryColor(notice.category) }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>{notice.category}</span>
                  <h3 style={{ margin: '12px 0 6px 0', color: '#1a1a2e', fontSize: '15px', fontWeight: '700' }}>{notice.title}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.5' }}>{notice.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'ticket' && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 6px 0', color: '#1a1a2e', fontSize: '18px', fontWeight: '700' }}>Raise a Support Ticket</h3>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '25px' }}>Student ID: {user.studentId} | Email: {user.email}</p>
            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Category</label>
            <select style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', marginBottom: '16px', outline: 'none', background: '#f8f9ff' }} value={ticketCategory} onChange={(e) => setTicketCategory(e.target.value)}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <label style={{ fontSize: '13px', color: '#555', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Describe Your Issue</label>
            <textarea style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', border: '2px solid #eee', height: '140px', boxSizing: 'border-box', fontSize: '14px', resize: 'none', outline: 'none', background: '#f8f9ff', lineHeight: '1.5' }} placeholder="Describe your issue in detail..." value={ticketText} onChange={(e) => setTicketText(e.target.value)} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '16px 0', background: '#fff3e0', padding: '14px 16px', borderRadius: '10px', border: '1px solid #ffcc80' }}>
              <input type="checkbox" id="private" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <label htmlFor="private" style={{ fontSize: '13px', color: '#e65100', cursor: 'pointer', fontWeight: '600' }}>Mark as Private — Only admin can view this ticket</label>
            </div>
            <button style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #302b63, #0f0c29)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', cursor: 'pointer', fontWeight: '700' }} onClick={submitTicket}>Submit Ticket</button>
            {ticketSent && <div style={{ marginTop: '16px', background: '#d4edda', padding: '14px', borderRadius: '10px', color: '#00aa00', textAlign: 'center', fontWeight: '700' }}>Ticket submitted successfully! Our team will respond shortly.</div>}
          </div>
        )}

        {page === 'mytickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>My Tickets</h3>
            {myTickets.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '60px', background: 'white', borderRadius: '16px' }}>You have not raised any tickets yet.</div>
            ) : (
              myTickets.map((ticket) => (
                <div key={ticket.id} style={{ background: 'white', borderRadius: '14px', padding: '18px 20px', marginBottom: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', borderLeft: '5px solid ' + (ticket.status === 'Open' ? '#ff4444' : '#00aa00') }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ background: categoryColor(ticket.category || 'General') + '22', color: categoryColor(ticket.category || 'General'), padding: '2px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>{ticket.category || 'General'}</span>
                        {ticket.private && <span style={{ background: '#ffe0e0', color: '#cc0000', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>Private</span>}
                      </div>
                      <p style={{ margin: '0 0 6px 0', fontWeight: '600', color: '#333', fontSize: '14px' }}>{ticket.issue}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>Submitted: {ticket.date}</p>
                    </div>
                    <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginLeft: '15px' }}>{ticket.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function AdminPage({ user, onLogout, users, setUsers, notices, setNotices, tickets, setTickets, docs, setDocs }) {
  const [page, setPage] = useState('dashboard')
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' })
  const [editUserId, setEditUserId] = useState(null)
  const [newNotice, setNewNotice] = useState({ title: '', date: '', category: 'General', description: '' })
  const [editNoticeId, setEditNoticeId] = useState(null)
  const [userMsg, setUserMsg] = useState('')
  const [noticeMsg, setNoticeMsg] = useState('')

  // ======= USER FUNCTIONS =======
  const saveUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) { setUserMsg('Please fill all fields!'); return }
    if (!isValidEmail(newUser.email)) { setUserMsg('Please enter a valid email!'); return }
    if (editUserId !== null) {
      setUsers(users.map(u => u.id === editUserId ? { ...u, ...newUser, avatar: newUser.name.charAt(0).toUpperCase() } : u))
      setEditUserId(null)
      setUserMsg('User updated successfully!')
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1, avatar: newUser.name.charAt(0).toUpperCase() }])
      setUserMsg('User created successfully!')
    }
    setNewUser({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' })
    setTimeout(() => setUserMsg(''), 3000)
  }

  const startEditUser = (u) => {
    setNewUser({ name: u.name, email: u.email, password: u.password, studentId: u.studentId || '', role: u.role, avatar: u.avatar })
    setEditUserId(u.id)
    window.scrollTo(0, 0)
  }

  const cancelEditUser = () => {
    setEditUserId(null)
    setNewUser({ name: '', email: '', password: '', studentId: '', role: 'student', avatar: '' })
  }

  const deleteUser = (id) => setUsers(users.filter(u => u.id !== id))

  // ======= NOTICE FUNCTIONS =======
  const saveNotice = () => {
    if (!newNotice.title || !newNotice.description) { setNoticeMsg('Please fill all fields!'); return }
    if (editNoticeId !== null) {
      setNotices(notices.map(n => n.id === editNoticeId ? { ...n, ...newNotice } : n))
      setEditNoticeId(null)
      setNoticeMsg('Notice updated successfully!')
    } else {
      setNotices([...notices, { id: notices.length + 1, ...newNotice, date: newNotice.date || new Date().toISOString().split('T')[0] }])
      setNoticeMsg('Notice added successfully!')
    }
    setNewNotice({ title: '', date: '', category: 'General', description: '' })
    setTimeout(() => setNoticeMsg(''), 3000)
  }

  const startEditNotice = (notice) => {
    setNewNotice({ title: notice.title, date: notice.date, category: notice.category, description: notice.description })
    setEditNoticeId(notice.id)
    window.scrollTo(0, 0)
  }

  const cancelEditNotice = () => {
    setEditNoticeId(null)
    setNewNotice({ title: '', date: '', category: 'General', description: '' })
  }

  const deleteNotice = (id) => setNotices(notices.filter(n => n.id !== id))
  const deleteDoc = (id) => setDocs(docs.filter(d => d.id !== id))
  const uploadDoc = () => {
    const name = prompt('Enter document name (e.g. Syllabus.pdf):')
    if (name) setDocs([...docs, { id: docs.length + 1, name, date: new Date().toISOString().split('T')[0], size: 'N/A' }])
  }
  const updateTicketStatus = (id, status) => setTickets(tickets.map(t => t.id === id ? { ...t, status } : t))

  const navItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'tickets', label: 'Tickets' },
    { key: 'notices', label: 'Notices' },
    { key: 'users', label: 'Users' },
    { key: 'documents', label: 'Documents' },
    { key: 'escalation', label: 'Escalation' },
    { key: 'private', label: 'Private' }
  ]

  const openTickets = tickets.filter(t => t.status === 'Open' && !t.private).length
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length
  const totalStudents = users.filter(u => u.role === 'student').length

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: "'Segoe UI', sans-serif" }}>
      <Header user={user} onLogout={onLogout} isAdmin={true} />
      <div style={{ maxWidth: '950px', margin: 'auto', padding: '25px' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', background: 'white', padding: '6px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)} style={{ padding: '10px 16px', background: page === item.key ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'transparent', color: page === item.key ? 'white' : '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Dashboard */}
        {page === 'dashboard' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Dashboard Overview</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', marginBottom: '25px' }}>
              {[
                { label: 'Total Students', value: totalStudents, color: '#667eea', bg: '#667eea11' },
                { label: 'Open Tickets', value: openTickets, color: '#ff4444', bg: '#ff444411' },
                { label: 'Resolved', value: resolvedTickets, color: '#00aa00', bg: '#00aa0011' },
                { label: 'Notices', value: notices.length, color: '#ff8800', bg: '#ff880011' }
              ].map((stat) => (
                <div key={stat.label} style={{ background: 'white', padding: '20px', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + stat.color }}>
                  <h2 style={{ margin: '0 0 6px 0', color: stat.color, fontSize: '32px', fontWeight: '800' }}>{stat.value}</h2>
                  <p style={{ margin: 0, color: '#888', fontSize: '13px', fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <h4 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Recent Tickets</h4>
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)' }}>
                    {['Student', 'Issue', 'Date', 'Status'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tickets.filter(t => !t.private).slice(0, 5).map((ticket, i) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                      <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tickets */}
        {page === 'tickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Student Tickets</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              {[
                { label: 'Total', value: tickets.filter(t => !t.private).length, color: '#667eea' },
                { label: 'Open', value: openTickets, color: '#ff4444' },
                { label: 'Resolved', value: resolvedTickets, color: '#00aa00' }
              ].map((stat) => (
                <div key={stat.label} style={{ background: 'white', padding: '16px 28px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + stat.color }}>
                  <h3 style={{ margin: 0, color: stat.color, fontSize: '28px', fontWeight: '800' }}>{stat.value}</h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#888', fontWeight: '600' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)' }}>
                    {['Student ID', 'Student', 'Issue', 'Date', 'Status', 'Action'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {tickets.filter(t => !t.private).map((ticket, i) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#667eea', fontWeight: '700' }}>{ticket.studentId}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                      <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        {ticket.status === 'Open'
                          ? <button onClick={() => updateTicketStatus(ticket.id, 'Resolved')} style={{ padding: '6px 14px', background: '#00aa00', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Resolve</button>
                          : <button onClick={() => updateTicketStatus(ticket.id, 'Open')} style={{ padding: '6px 14px', background: '#ff8800', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Reopen</button>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Notices */}
        {page === 'notices' && (
          <div>
            <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', borderRadius: '16px', padding: '25px 30px', marginBottom: '25px' }}>
              <h2 style={{ margin: '0 0 6px 0', color: 'white', fontSize: '22px', fontWeight: '700' }}>Notice Management</h2>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Admin can create, update, and delete campus notices.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <h4 style={{ margin: '0 0 20px 0', color: '#1a1a2e', fontSize: '16px', fontWeight: '700' }}>{editNoticeId !== null ? 'Edit Notice' : 'Create Notice'}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Title" value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} />
                <select style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} value={newNotice.category} onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <input type="date" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '15px', background: '#f8f9ff' }} value={newNotice.date} onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })} />
              <textarea style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', height: '100px', resize: 'none', boxSizing: 'border-box', outline: 'none', marginBottom: '15px', background: '#f8f9ff' }} placeholder="Description" value={newNotice.description} onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={saveNotice} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>
                  {editNoticeId !== null ? 'Update Notice' : 'Create Notice'}
                </button>
                {editNoticeId !== null && (
                  <button onClick={cancelEditNotice} style={{ padding: '12px 25px', background: '#eee', color: '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>Cancel</button>
                )}
              </div>
              {noticeMsg && <p style={{ color: noticeMsg.includes('Please') ? '#ff4444' : '#00aa00', marginTop: '10px', fontWeight: '700' }}>{noticeMsg}</p>}
            </div>

            <h4 style={{ color: '#1a1a2e', marginBottom: '15px', fontWeight: '700' }}>Notice List</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '4px solid ' + categoryColor(notice.category) }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>{notice.category}</span>
                  <h4 style={{ margin: '10px 0 6px 0', color: '#1a1a2e', fontSize: '14px', fontWeight: '700' }}>{notice.title}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: '0 0 15px 0', color: '#555', fontSize: '13px', lineHeight: '1.4' }}>{notice.description}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => startEditNotice(notice)} style={{ padding: '6px 14px', background: '#e3f2fd', color: '#0084ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Edit</button>
                    <button onClick={() => deleteNotice(notice.id)} style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users */}
        {page === 'users' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Manage Users</h3>

            {/* Create / Edit User Form */}
            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', border: editUserId !== null ? '2px solid #667eea' : 'none' }}>
              <h4 style={{ margin: '0 0 20px 0', color: '#1a1a2e', fontWeight: '700' }}>
                {editUserId !== null ? 'Edit User' : 'Create New User'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Full Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Email Address" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Student ID" value={newUser.studentId} onChange={(e) => setNewUser({ ...newUser, studentId: e.target.value })} />
                <input style={{ padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', background: '#f8f9ff' }} placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
              </div>
              <select style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', marginBottom: '15px', outline: 'none', background: '#f8f9ff' }} value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={saveUser} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>
                  {editUserId !== null ? 'Update User' : 'Create User'}
                </button>
                {editUserId !== null && (
                  <button onClick={cancelEditUser} style={{ padding: '12px 25px', background: '#eee', color: '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>Cancel</button>
                )}
              </div>
              {userMsg && <p style={{ color: userMsg.includes('Please') ? '#ff4444' : '#00aa00', marginTop: '10px', fontWeight: '700' }}>{userMsg}</p>}
            </div>

            {/* Users Table */}
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)' }}>
                    {['Avatar', 'Name', 'Email', 'Student ID', 'Role', 'Actions'].map(h => (
                      <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.id} style={{ borderBottom: '1px solid #f5f5f5', background: editUserId === u.id ? '#f0f4ff' : i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ width: '34px', height: '34px', background: u.role === 'admin' ? 'linear-gradient(135deg, #ff8800, #ff4444)' : 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '14px' }}>{u.avatar}</div>
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: '600', color: '#333', fontSize: '14px' }}>{u.name}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.email}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.studentId || '-'}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: u.role === 'admin' ? '#1a1a2e' : '#667eea22', color: u.role === 'admin' ? 'white' : '#667eea', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{u.role}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button onClick={() => startEditUser(u)} style={{ padding: '6px 14px', background: '#e3f2fd', color: '#0084ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Edit</button>
                          {u.role !== 'admin' && (
                            <button onClick={() => deleteUser(u.id)} style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Documents */}
        {page === 'documents' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: '#1a1a2e', margin: 0, fontSize: '18px', fontWeight: '700' }}>Manage Documents</h3>
              <button onClick={uploadDoc} style={{ padding: '12px 22px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' }}>+ Upload Document</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {docs.map((doc) => (
                <div key={doc.id} style={{ background: 'white', borderRadius: '12px', padding: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '46px', height: '46px', background: '#ffe0e0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4444', fontWeight: '800', fontSize: '11px' }}>PDF</div>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#333', fontSize: '14px' }}>{doc.name}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>{doc.date} | {doc.size}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteDoc(doc.id)} style={{ padding: '7px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Escalation */}
        {page === 'escalation' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>Escalation Logs</h3>
            {[
              { query: 'What is the MCA syllabus for 3rd semester?', score: 0.2, date: '2026-06-12', color: '#ff8800', label: 'Low Confidence' },
              { query: 'When is the annual sports event?', score: 0.1, date: '2026-06-11', color: '#ff4444', label: 'Unresolved' },
              { query: 'How to apply for scholarship?', score: 0.15, date: '2026-06-10', color: '#ff8800', label: 'Low Confidence' }
            ].map((log, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px 20px', marginBottom: '12px', borderLeft: '5px solid ' + log.color, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ background: log.color + '22', color: log.color, padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{log.label}</span>
                  <span style={{ fontSize: '12px', color: '#aaa', fontWeight: '600' }}>{log.date}</span>
                </div>
                <p style={{ margin: '0 0 6px 0', color: '#333', fontSize: '14px', fontWeight: '600' }}>"{log.query}"</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Confidence Score: <strong style={{ color: log.color }}>{log.score}</strong></p>
              </div>
            ))}
          </div>
        )}

        {/* Private Tickets */}
        {page === 'private' && (
          <div>
            <div style={{ background: 'linear-gradient(135deg, #cc0000, #ff4444)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <p style={{ margin: 0, color: 'white', fontSize: '13px', fontWeight: '700' }}>These tickets are strictly confidential. Only admin can view them.</p>
            </div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Private Tickets</h3>
            {tickets.filter(t => t.private).length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '60px', background: 'white', borderRadius: '16px' }}>No private tickets submitted yet.</div>
            ) : (
              <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #cc0000, #ff4444)' }}>
                      {['Student ID', 'Student', 'Issue', 'Date', 'Status'].map(h => <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.filter(t => t.private).map((ticket, i) => (
                      <tr key={ticket.id} style={{ borderBottom: '1px solid #f5f5f5', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#667eea', fontWeight: '700' }}>{ticket.studentId}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '600', color: '#333' }}>{ticket.student}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                        <td style={{ padding: '14px 16px', fontSize: '12px', color: '#aaa' }}>{ticket.date}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>{ticket.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState(initialUsers)
  const [notices, setNotices] = useState(initialNotices)
  const [tickets, setTickets] = useState(initialTickets)
  const [docs, setDocs] = useState(initialDocs)

  if (!user) return <LoginPage onLogin={(u) => setUser(u)} users={users} />
  if (user.role === 'student') return <StudentPage user={user} onLogout={() => setUser(null)} notices={notices} tickets={tickets} setTickets={setTickets} />
  if (user.role === 'admin') return <AdminPage user={user} onLogout={() => setUser(null)} users={users} setUsers={setUsers} notices={notices} setNotices={setNotices} tickets={tickets} setTickets={setTickets} docs={docs} setDocs={setDocs} />
}

export default App
