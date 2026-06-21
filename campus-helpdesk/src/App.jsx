import { useState } from 'react'

const initialUsers = [
  { id: 1, name: 'Vidhi Gupta', username: 'student1', password: '1234', role: 'student', studentId: 'A2305' },
  { id: 2, name: 'Keshav Sharma', username: 'student2', password: '1234', role: 'student', studentId: 'A2306' },
  { id: 3, name: 'Admin', username: 'admin', password: 'admin123', role: 'admin', studentId: '-' }
]

const initialNotices = [
  { id: 1, title: 'Fee Submission Deadline', date: '2026-06-15', category: 'Fees', description: 'Last date to submit semester fees is 15th June 2026.' },
  { id: 2, title: 'Exam Timetable Released', date: '2026-06-10', category: 'Exam', description: 'End semester examination timetable has been released.' },
  { id: 3, title: 'Hostel Curfew Reminder', date: '2026-06-08', category: 'Hostel', description: 'All hostel students must return by 10:00 PM.' }
]

const initialTickets = [
  { id: 1, studentId: 'A2305', student: 'Vidhi Gupta', issue: 'Fee receipt not generated', status: 'Open', date: '2026-06-12', private: false },
  { id: 2, studentId: 'A2306', student: 'Keshav Sharma', issue: 'Library card not issued', status: 'Resolved', date: '2026-06-10', private: false },
  { id: 3, studentId: 'A2305', student: 'Vidhi Gupta', issue: 'Hostel room complaint', status: 'Open', date: '2026-06-11', private: true }
]

const initialDocs = [
  { id: 1, name: 'Admission Brochure.pdf', date: '2026-06-01' },
  { id: 2, name: 'Fee Structure 2026.pdf', date: '2026-06-02' },
  { id: 3, name: 'MCA Syllabus.pdf', date: '2026-06-03' }
]

const CATEGORIES = ['General', 'Fees', 'Exam', 'Admission', 'Placement', 'Hostel']

const categoryColor = (cat) => {
  const map = { General: '#6c757d', Fees: '#0084ff', Exam: '#764ba2', Admission: '#00aa00', Placement: '#ff8800', Hostel: '#cc0000' }
  return map[cat] || '#888'
}

// ======= LOGIN =======
function LoginPage({ onLogin, users }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) { onLogin(user) }
    else { setError('Invalid username or password!') }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', width: '380px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', borderRadius: '50%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}>A</span>
          </div>
          <h2 style={{ margin: '12px 0 4px 0', color: '#1a1a2e', fontSize: '22px' }}>Amity University</h2>
          <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>Campus Helpdesk Portal</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>Username</label>
          <input
            style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '10px', border: '2px solid #eee', boxSizing: 'border-box', fontSize: '14px' }}
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '10px', border: '2px solid #eee', boxSizing: 'border-box', fontSize: '14px' }}
              placeholder="Enter password"
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <span onClick={() => setShow(!show)} style={{ position: 'absolute', right: '12px', top: '17px', cursor: 'pointer', fontSize: '13px', color: '#888' }}>
              {show ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>

        {error && <div style={{ background: '#ffe0e0', padding: '10px', borderRadius: '8px', color: '#cc0000', fontSize: '13px', marginBottom: '15px' }}>{error}</div>}

        <button
          style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={handleLogin}
        >
          Login
        </button>

        <div style={{ marginTop: '20px', background: '#f8f9ff', padding: '15px', borderRadius: '10px', fontSize: '12px', color: '#666' }}>
          <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#0f3460' }}>Demo Credentials:</p>
          <p style={{ margin: '0 0 3px 0' }}>Student: student1 / 1234</p>
          <p style={{ margin: 0 }}>Admin: admin / admin123</p>
        </div>
      </div>
    </div>
  )
}

// ======= HEADER =======
function Header({ user, onLogout, isAdmin }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '42px', height: '42px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', color: '#1a1a2e' }}>A</div>
        <div>
          <h3 style={{ margin: 0, color: 'white', fontSize: '16px' }}>Amity University</h3>
          <p style={{ margin: 0, color: '#aaa', fontSize: '11px' }}>{isAdmin ? 'Admin Panel' : 'Campus Helpdesk'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'white', fontSize: '14px', fontWeight: 'bold' }}>{user.name}</p>
          <p style={{ margin: 0, color: '#aaa', fontSize: '11px' }}>{isAdmin ? 'Administrator' : 'Student - ' + user.studentId}</p>
        </div>
        <div style={{ width: '38px', height: '38px', background: isAdmin ? '#ff8800' : '#667eea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px', border: '2px solid rgba(255,255,255,0.3)' }}>
          {user.name.charAt(0)}
        </div>
        <button onClick={onLogout} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>Logout</button>
      </div>
    </div>
  )
}

// ======= STUDENT PAGE =======
function StudentPage({ user, onLogout, notices, tickets, setTickets }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [page, setPage] = useState('chat')
  const [ticketText, setTicketText] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [ticketSent, setTicketSent] = useState(false)

  const sendMessage = () => {
    if (input.trim() === '') return
    const studentMsg = { text: input, sender: 'student' }
    const lower = input.toLowerCase()
    let reply = "I am sorry, I do not have information on that. Please contact the helpdesk."
    if (lower.includes('fee')) reply = "Fee submission deadline is 15th June 2026. Late fine applicable after due date."
    else if (lower.includes('exam') || lower.includes('timetable')) reply = "End semester exam timetable has been released. Please check the notice board."
    else if (lower.includes('hostel')) reply = "Hostel curfew time is 10:00 PM. All students must return before that."
    else if (lower.includes('library')) reply = "Library is open 9:00 AM to 6:00 PM on all working days."
    else if (lower.includes('admission')) reply = "Please contact the admission office for admission related queries."
    else if (lower.includes('syllabus')) reply = "Syllabus is available on the college portal. Contact your department."
    setMessages([...messages, studentMsg, { text: reply, sender: 'ai' }])
    setInput('')
  }

  const submitTicket = () => {
    if (ticketText.trim() === '') return
    setTickets(prev => [...prev, {
      id: prev.length + 1,
      studentId: user.studentId,
      student: user.name,
      issue: ticketText,
      status: 'Open',
      date: new Date().toISOString().split('T')[0],
      private: isPrivate
    }])
    setTicketText('')
    setIsPrivate(false)
    setTicketSent(true)
    setTimeout(() => setTicketSent(false), 3000)
  }

  const myTickets = tickets.filter(t => t.studentId === user.studentId)

  const navItems = [
    { key: 'chat', label: 'Chat' },
    { key: 'notices', label: 'Notices' },
    { key: 'ticket', label: 'Raise Ticket' },
    { key: 'mytickets', label: 'My Tickets' }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header user={user} onLogout={onLogout} isAdmin={false} />
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '25px' }}>

        {/* Nav */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)}
              style={{ padding: '10px 22px', background: page === item.key ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'white', color: page === item.key ? 'white' : '#555', border: '2px solid #e0e0e0', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Chat */}
        {page === 'chat' && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#1a1a2e' }}>Ask Your Question</h3>
            <div style={{ height: '380px', overflowY: 'auto', padding: '10px', background: '#f8f9ff', borderRadius: '12px', marginBottom: '15px' }}>
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '80px', color: '#aaa' }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>AI</div>
                  <p>Hi {user.name}! Ask me anything about campus.</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} style={{ textAlign: msg.sender === 'student' ? 'right' : 'left', margin: '10px 0' }}>
                  <span style={{ background: msg.sender === 'student' ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'white', color: msg.sender === 'student' ? 'white' : '#333', padding: '10px 15px', borderRadius: msg.sender === 'student' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', display: 'inline-block', maxWidth: '75%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontSize: '14px' }}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                style={{ flex: 1, padding: '12px 16px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }}
                placeholder="Ask your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button style={{ padding: '12px 22px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }} onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        {/* Notices */}
        {page === 'notices' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Latest Notices</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{notice.category}</span>
                  <h3 style={{ margin: '10px 0 6px 0', color: '#1a1a2e', fontSize: '15px' }}>{notice.title}</h3>
                  <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: 0, color: '#555', fontSize: '13px' }}>{notice.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Raise Ticket */}
        {page === 'ticket' && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#1a1a2e' }}>Raise a Ticket</h3>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>Student ID: {user.studentId}</p>
            <textarea
              style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '2px solid #eee', height: '130px', boxSizing: 'border-box', fontSize: '14px', resize: 'none', outline: 'none' }}
              placeholder="Describe your issue in detail..."
              value={ticketText}
              onChange={(e) => setTicketText(e.target.value)}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', background: '#f8f9ff', padding: '12px', borderRadius: '10px' }}>
              <input type="checkbox" id="private" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <label htmlFor="private" style={{ fontSize: '14px', color: '#555', cursor: 'pointer' }}>Mark as Private - Only admin can see this ticket</label>
            </div>
            <button
              style={{ width: '100%', padding: '13px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', cursor: 'pointer', fontWeight: 'bold' }}
              onClick={submitTicket}
            >
              Submit Ticket
            </button>
            {ticketSent && (
              <div style={{ marginTop: '15px', background: '#d4edda', padding: '14px', borderRadius: '10px', color: '#00aa00', textAlign: 'center', fontWeight: 'bold' }}>
                Ticket submitted successfully!
              </div>
            )}
          </div>
        )}

        {/* My Tickets */}
        {page === 'mytickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>My Tickets</h3>
            {myTickets.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '40px', background: 'white', borderRadius: '16px' }}>No tickets raised yet.</div>
            ) : (
              myTickets.map((ticket) => (
                <div key={ticket.id} style={{ background: 'white', borderRadius: '12px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', borderLeft: '5px solid ' + (ticket.status === 'Open' ? '#ff4444' : '#00aa00') }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#333' }}>{ticket.issue}</p>
                      <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#aaa' }}>Date: {ticket.date}</p>
                      {ticket.private && <span style={{ background: '#ffe0e0', color: '#cc0000', padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>Private</span>}
                    </div>
                    <span style={{ background: ticket.status === 'Open' ? '#ff4444' : '#00aa00', color: 'white', padding: '5px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>{ticket.status}</span>
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

// ======= ADMIN PAGE =======
function AdminPage({ user, onLogout, users, setUsers, notices, setNotices, tickets, setTickets, docs, setDocs }) {
  const [page, setPage] = useState('tickets')
  const [newUser, setNewUser] = useState({ name: '', username: '', password: '', studentId: '', role: 'student' })
  const [newNotice, setNewNotice] = useState({ title: '', date: '', category: 'General', description: '' })
  const [userMsg, setUserMsg] = useState('')
  const [noticeMsg, setNoticeMsg] = useState('')
  const [editNotice, setEditNotice] = useState(null)

  const addUser = () => {
    if (!newUser.name || !newUser.username || !newUser.password) return
    setUsers([...users, { ...newUser, id: users.length + 1 }])
    setNewUser({ name: '', username: '', password: '', studentId: '', role: 'student' })
    setUserMsg('User created successfully!')
    setTimeout(() => setUserMsg(''), 3000)
  }

  const deleteUser = (id) => setUsers(users.filter(u => u.id !== id))

  const addNotice = () => {
    if (!newNotice.title || !newNotice.description) return
    if (editNotice !== null) {
      setNotices(notices.map(n => n.id === editNotice ? { ...n, ...newNotice } : n))
      setEditNotice(null)
    } else {
      setNotices([...notices, { id: notices.length + 1, ...newNotice, date: newNotice.date || new Date().toISOString().split('T')[0] }])
    }
    setNewNotice({ title: '', date: '', category: 'General', description: '' })
    setNoticeMsg(editNotice !== null ? 'Notice updated!' : 'Notice added successfully!')
    setTimeout(() => setNoticeMsg(''), 3000)
  }

  const startEdit = (notice) => {
    setNewNotice({ title: notice.title, date: notice.date, category: notice.category, description: notice.description })
    setEditNotice(notice.id)
    setPage('notices')
  }

  const deleteNotice = (id) => setNotices(notices.filter(n => n.id !== id))
  const deleteDoc = (id) => setDocs(docs.filter(d => d.id !== id))

  const uploadDoc = () => {
    const name = prompt('Enter document name (e.g. Syllabus.pdf):')
    if (name) setDocs([...docs, { id: docs.length + 1, name, date: new Date().toISOString().split('T')[0] }])
  }

  const updateTicketStatus = (id, status) => setTickets(tickets.map(t => t.id === id ? { ...t, status } : t))

  const navItems = [
    { key: 'tickets', label: 'Tickets' },
    { key: 'notices', label: 'Notices' },
    { key: 'users', label: 'Users' },
    { key: 'documents', label: 'Documents' },
    { key: 'escalation', label: 'Escalation' },
    { key: 'private', label: 'Private Tickets' }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header user={user} onLogout={onLogout} isAdmin={true} />
      <div style={{ maxWidth: '900px', margin: 'auto', padding: '25px' }}>

        {/* Nav */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)}
              style={{ padding: '10px 18px', background: page === item.key ? 'linear-gradient(135deg, #1a1a2e, #0f3460)' : 'white', color: page === item.key ? 'white' : '#555', border: '2px solid #e0e0e0', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Tickets */}
        {page === 'tickets' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Student Tickets</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              {[
                { label: 'Total', value: tickets.filter(t => !t.private).length, bg: '#e3f2fd', color: '#0084ff' },
                { label: 'Open', value: tickets.filter(t => t.status === 'Open' && !t.private).length, bg: '#ffe0e0', color: '#ff4444' },
                { label: 'Resolved', value: tickets.filter(t => t.status === 'Resolved').length, bg: '#d4edda', color: '#00aa00' }
              ].map((stat) => (
                <div key={stat.label} style={{ background: stat.bg, padding: '15px 30px', borderRadius: '12px', textAlign: 'center' }}>
                  <h3 style={{ margin: 0, color: stat.color, fontSize: '26px' }}>{stat.value}</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)' }}>
                    {['Student ID', 'Student Name', 'Issue', 'Date', 'Status', 'Action'].map(h => (
                      <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tickets.filter(t => !t.private).map((ticket, i) => (
                    <tr key={ticket.id} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.studentId}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{ticket.student}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#aaa' }}>{ticket.date}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                          {ticket.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        {ticket.status === 'Open' ? (
                          <button onClick={() => updateTicketStatus(ticket.id, 'Resolved')}
                            style={{ padding: '5px 12px', background: '#00aa00', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                            Resolve
                          </button>
                        ) : (
                          <button onClick={() => updateTicketStatus(ticket.id, 'Open')}
                            style={{ padding: '5px 12px', background: '#ff8800', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                            Reopen
                          </button>
                        )}
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
            {/* Header Banner */}
            <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', borderRadius: '14px', padding: '25px 30px', marginBottom: '25px' }}>
              <h2 style={{ margin: '0 0 6px 0', color: 'white', fontSize: '22px' }}>Notice Management</h2>
              <p style={{ margin: 0, color: '#aaa', fontSize: '13px' }}>Admin can create, update, and delete campus notices.</p>
            </div>

            {/* Create/Edit Notice Form */}
            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <h4 style={{ margin: '0 0 20px 0', color: '#1a1a2e', fontSize: '16px' }}>{editNotice !== null ? 'Edit Notice' : 'Create Notice'}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <input
                  style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }}
                  placeholder="Title"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                />
                <select
                  style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }}
                  value={newNotice.category}
                  onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <input
                type="date"
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '15px' }}
                value={newNotice.date}
                onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
              />
              <textarea
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', height: '100px', resize: 'none', boxSizing: 'border-box', outline: 'none', marginBottom: '15px' }}
                placeholder="Description"
                value={newNotice.description}
                onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={addNotice}
                  style={{ padding: '12px 25px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                  {editNotice !== null ? 'Update Notice' : 'Create Notice'}
                </button>
                {editNotice !== null && (
                  <button onClick={() => { setEditNotice(null); setNewNotice({ title: '', date: '', category: 'General', description: '' }) }}
                    style={{ padding: '12px 25px', background: '#eee', color: '#555', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Cancel
                  </button>
                )}
              </div>
              {noticeMsg && <p style={{ color: '#00aa00', marginTop: '10px', fontWeight: 'bold' }}>{noticeMsg}</p>}
            </div>

            {/* Notice List */}
            <h4 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Notice List</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              {notices.map((notice) => (
                <div key={notice.id} style={{ background: 'white', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                  <span style={{ background: categoryColor(notice.category) + '22', color: categoryColor(notice.category), padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{notice.category}</span>
                  <h4 style={{ margin: '10px 0 6px 0', color: '#1a1a2e', fontSize: '14px' }}>{notice.title}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#aaa', fontSize: '12px' }}>{notice.date}</p>
                  <p style={{ margin: '0 0 15px 0', color: '#555', fontSize: '13px' }}>{notice.description}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => startEdit(notice)}
                      style={{ padding: '6px 14px', background: '#e3f2fd', color: '#0084ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>
                      Edit
                    </button>
                    <button onClick={() => deleteNotice(notice.id)}
                      style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users */}
        {page === 'users' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Manage Users</h3>
            <div style={{ background: 'white', borderRadius: '14px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#0f3460' }}>Create New User</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <input style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }} placeholder="Full Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }} placeholder="Student ID" value={newUser.studentId} onChange={(e) => setNewUser({ ...newUser, studentId: e.target.value })} />
                <input style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }} placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                <input style={{ padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', outline: 'none' }} placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
              </div>
              <select style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #eee', fontSize: '14px', marginBottom: '12px', outline: 'none' }} value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              <button onClick={addUser} style={{ padding: '12px 25px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Create User</button>
              {userMsg && <p style={{ color: '#00aa00', marginTop: '10px', fontWeight: 'bold' }}>{userMsg}</p>}
            </div>

            <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f3460)' }}>
                    {['Name', 'Username', 'Student ID', 'Role', 'Action'].map(h => (
                      <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.id} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#333', fontSize: '14px' }}>{u.name}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.username}</td>
                      <td style={{ padding: '14px 16px', color: '#555', fontSize: '13px' }}>{u.studentId || '-'}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: u.role === 'admin' ? '#1a1a2e' : '#e3f2fd', color: u.role === 'admin' ? 'white' : '#0084ff', padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{u.role}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        {u.role !== 'admin' && (
                          <button onClick={() => deleteUser(u.id)} style={{ padding: '5px 12px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Delete</button>
                        )}
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
              <h3 style={{ color: '#1a1a2e', margin: 0 }}>Manage Documents</h3>
              <button onClick={uploadDoc} style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #1a1a2e, #0f3460)', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                + Upload Document
              </button>
            </div>
            {docs.map((doc) => (
              <div key={doc.id} style={{ background: 'white', borderRadius: '12px', padding: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#ffe0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4444', fontWeight: 'bold', fontSize: '12px' }}>PDF</div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#333' }}>{doc.name}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>Uploaded: {doc.date}</p>
                  </div>
                </div>
                <button onClick={() => deleteDoc(doc.id)} style={{ padding: '6px 14px', background: '#ffe0e0', color: '#ff4444', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {/* Escalation */}
        {page === 'escalation' && (
          <div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Escalation Logs</h3>
            {[
              { query: 'What is the MCA syllabus?', score: 0.2, date: '2026-06-12', color: '#ff8800', label: 'Low Confidence' },
              { query: 'When is the sports event?', score: 0.1, date: '2026-06-11', color: '#ff4444', label: 'Unresolved' }
            ].map((log, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '16px', marginBottom: '12px', borderLeft: '5px solid ' + log.color, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ background: log.color + '22', color: log.color, padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{log.label}</span>
                  <span style={{ fontSize: '12px', color: '#aaa' }}>{log.date}</span>
                </div>
                <p style={{ margin: '0 0 6px 0', color: '#333', fontSize: '14px' }}>Query: "{log.query}"</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>Confidence Score: {log.score}</p>
              </div>
            ))}
          </div>
        )}

        {/* Private Tickets */}
        {page === 'private' && (
          <div>
            <div style={{ background: '#ffe0e0', padding: '14px', borderRadius: '10px', marginBottom: '20px' }}>
              <p style={{ margin: 0, color: '#cc0000', fontSize: '13px', fontWeight: 'bold' }}>These tickets are strictly private. Only admin can view them.</p>
            </div>
            <h3 style={{ color: '#1a1a2e', marginBottom: '15px' }}>Private Tickets</h3>
            {tickets.filter(t => t.private).length === 0 ? (
              <div style={{ textAlign: 'center', color: '#aaa', padding: '40px', background: 'white', borderRadius: '16px' }}>No private tickets yet.</div>
            ) : (
              <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #cc0000, #ff4444)' }}>
                      {['Student ID', 'Student Name', 'Issue', 'Date', 'Status'].map(h => (
                        <th key={h} style={{ padding: '14px 16px', color: 'white', textAlign: 'left', fontSize: '13px' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.filter(t => t.private).map((ticket, i) => (
                      <tr key={ticket.id} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.studentId}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{ticket.student}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#555' }}>{ticket.issue}</td>
                        <td style={{ padding: '14px 16px', fontSize: '13px', color: '#aaa' }}>{ticket.date}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ background: ticket.status === 'Open' ? '#ff444422' : '#00aa0022', color: ticket.status === 'Open' ? '#ff4444' : '#00aa00', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                            {ticket.status}
                          </span>
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

// ======= MAIN APP =======
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