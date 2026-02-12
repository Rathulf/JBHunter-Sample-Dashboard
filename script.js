function showSection(id) {
    
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active'));
    
    const target = document.getElementById(id);
		if (target) {
			target.classList.add('active');
		}
	}
	document.querySelectorAll('.industry-list li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.industry-list li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
        console.log("Filtering forum by: " + this.innerText);
    });
});