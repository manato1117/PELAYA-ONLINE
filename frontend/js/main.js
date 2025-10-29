// API Base URL
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : '/api';

// Load courses from API
async function loadCourses() {
    try {
        const response = await fetch(`${API_URL}/courses`);
        const data = await response.json();
        
        displayCourses(data.courses);
    } catch (error) {
        console.error('Error loading courses:', error);
        document.getElementById('courses-container').innerHTML = 
            '<p>Error loading courses. Please try again later.</p>';
    }
}

// Display courses in the grid
function displayCourses(courses) {
    const container = document.getElementById('courses-container');
    
    if (!courses || courses.length === 0) {
        container.innerHTML = '<p>No courses available at this time.</p>';
        return;
    }
    
    container.innerHTML = courses.map(course => `
        <div class="course-card">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <div class="course-meta">
                <span>Duration: ${course.duration}</span>
                <span>${course.enrolled} enrolled</span>
            </div>
            <button class="btn-primary" onclick="enrollCourse(${course.id})">
                Enroll Now
            </button>
        </div>
    `).join('');
}

// Enroll in a course
async function enrollCourse(courseId) {
    try {
        // In a real application, you would get the userId from authentication
        const userId = 1; // Mock user ID
        
        const response = await fetch(`${API_URL}/enroll`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseId, userId })
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('Successfully enrolled in the course!');
        } else {
            alert('Failed to enroll. Please try again.');
        }
    } catch (error) {
        console.error('Error enrolling in course:', error);
        alert('Error enrolling in course. Please try again later.');
    }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Load courses on page load
    loadCourses();
});
