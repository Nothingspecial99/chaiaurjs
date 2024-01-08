Learned that you can't put \n in element.textContent for newline as html ignores any whitespace. To overcome this, 
I used element.innerHTML = "blah blah < br > blah blah", putting space in br bcz github is breaking line instead of showing the element itself
