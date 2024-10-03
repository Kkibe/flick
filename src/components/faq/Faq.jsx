import React, { useEffect, useRef } from 'react'
import './style.css'

const data = [
  {
    id: 1,
    question: 'How can i delete my complaint/comment?',
    answer: 'Lorem ipsum dolor sit amet, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    question: 'How can i delete my complaint/comment?',
    answer: 'Lorem ipsum dolor sit amet, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    question: 'How can i delete my complaint/comment?',
    answer: 'Lorem ipsum dolor sit amet, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 4,
    question: 'How can i delete my complaint/comment?',
    answer: 'Lorem ipsum dolor sit amet, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 5,
    question: 'How can i delete my complaint/comment?',
    answer: 'Lorem ipsum dolor sit amet, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

export default function Faq() {

    const topicRef = useRef();
    const triggerRef = useRef();
    const answerRef = useRef();
    const ptagRef = useRef();
    const questionRef = useRef();

    const clickItem = () => {
        answerRef.slideToggle(200);
        if (triggerRef.hasClass("faq-o")) {
          triggerRef.removeClass("faq-o");
        } else {
          triggerRef.addClass("faq-o");
        }
        
        if (topicRef.hasClass("expanded")) {
          topicRef.removeClass("expanded");
        } else {
          topicRef.addClass("expanded");
        }
      };

      useEffect(() => {
            //questionRef.current.data-search-term = questionRef.text().toLowerCase() + ptagRef.text().toLowerCase());
            //$(this).attr('data-search-term', $(this).text().toLowerCase() + ptagRef.text().toLowerCase());
      }, [])

  return (
<div className='container'>
  <h1>Frequently Asked Questions</h1>
  <> 
    {
      data.map(item => {
        return (
          <div class="topic" ref={topicRef}>
          <div class="open" onClick={() => clickItem}>
            <h2 class="question" data-search-term={questionRef}>{item.question}<span class="ptag" ref={ptagRef}>SIEBEL</span></h2>
            <span class="faq-t" ref={triggerRef}></span>
          </div>
          <p class="answer" ref={answerRef}>{item.answer}</p>
        </div>
        )
      })
    }
  </>
</div>
  )
}
