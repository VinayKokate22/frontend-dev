const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "Sara Jones",
        job: "UI/UX Desingner",
        img:
          "photo-1544005313-94ddf0286df2.avif",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odioaccusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis earum, ut nesciunt dolorum corrupti sunt enim numquam distinctioeveniet. Aliquid officia repellendus nisi ullam .",
      },
  ];
  let count=0
  const nextBtn=document.querySelector(".next")
  const prevBtn=document.querySelector(".prev")
  const namePerson=document.querySelector(".name")
  const personJob=document.querySelector(".job")
  const personInfo=document.querySelector(".personinfo")
  const personImage=document.querySelector(".personimage")


  function displayreviews(count) {
    namePerson.textContent=reviews[count].name
    personInfo.textContent=reviews[count].text
    personJob.textContent=reviews[count].job 
    personImage.src=reviews[count].img
    
  }
  nextBtn.addEventListener("click",function () {
    // console.log("hello")
    count=(count+1)%reviews.length
    displayreviews(count)

    // console.log(count)
  })


  prevBtn.addEventListener("click",function () {
    if (count==0) {
      count=reviews.length-1
    }
    else{
      count--
    }
    displayreviews(count)
  })