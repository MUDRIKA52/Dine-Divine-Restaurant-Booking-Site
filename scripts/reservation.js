document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Basic Validation
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let guests = document.getElementById("guests").value;
        let requests = document.getElementById("requests").value;

        // Ensure all required fields are filled
        if (!name || !email || !phone || !date || !time || !guests) {
            alert("❌ Please fill out all required fields.");
            return;
        }

        // Google Form Action URL (Replace with your actual URL)
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdCjjJMFahDdmXPTCgydPTktfQLMPMDK-LtXwDNdLvnjEtciQ/formResponse";

        // Create form data
        const formData = new FormData();
        formData.append("entry.1996842041", name);      // Name field entry ID
        formData.append("entry.1038711233", email);     // Email field entry ID
        formData.append("entry.737076456", phone);     // Phone field entry ID
        formData.append("entry.7925356", date);         // Date field entry ID
        formData.append("entry.1536031077_hour", time.split(":")[0]);  // Time - Hour field entry ID
        formData.append("entry.1536031077_minute", time.split(":")[1]);  // Time - Minute field entry ID
        formData.append("entry.266094623", guests);     // Guests field entry ID
        formData.append("entry.2052816560", requests);  // Special Requests field entry ID

        // Create iframe for form submission
        const iframe = document.createElement("iframe");
        iframe.style.display = "none"; // Hide iframe
        document.body.appendChild(iframe);

        // Send data to Google Form using iframe
        const iframeForm = iframe.contentWindow.document;
        iframeForm.open();
        iframeForm.write("<form method='POST' action='" + googleFormURL + "'>");
        formData.forEach(function(value, key) {
            iframeForm.write("<input type='hidden' name='" + key + "' value='" + value + "'>");
        });
        iframeForm.write("</form>");
        iframeForm.close();

        // Submit the form inside iframe
        iframeForm.querySelector("form").submit();

        // Show success confirmation
        console.log("✅ Data submitted successfully!");
        alert("✅ Table is booked!");

        // Show confirmation message and hide form
        const confirmationMessage = document.createElement('div');
        confirmationMessage.classList.add('confirmation-message');
        confirmationMessage.textContent = '🎉 Your table has been successfully booked!';

        // Append the confirmation message to the form section
        document.querySelector('.reservation-section').appendChild(confirmationMessage);
        form.style.display = 'none'; // Optionally hide the form
    });
});
