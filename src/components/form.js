import { useState, useEffect, useRef } from "react";
import React from "react";
import styles from "@/styles/form.module.scss";

export default function Form() {
  // const spawnMessageProblem = document.getElementById("spawnMessageProblem")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    // useEffect(() => {
      const spawnMessageProblem = document.getElementById(
        "spawnMessageProblem"
      );
      spawnMessageProblem.style.display = "block";
      setTimeout(() => {
        spawnMessageProblem.style.display = "none";
      }, 16000);
    // });
  };

  return (
    <section>
      <section className={`${`${styles.containerForm}`}`}>
        <p className={`${`${styles.itemTitleForm}`}`}>I guess you need me !</p>
        <form
          action=""
          className={`${`${styles.itemForm}`}`}
          onSubmit={handleSubmit}
        >
          {/* Message done or error */}
          <div className={`relative`}>
            <div
              className={`${styles.containerMessage}`}
              id="spawnMessageProblem"
            >
              <p className={`text-paragraph-medium ${styles.itemMessage}`}>
                All good !
              </p>
            </div>
          </div>
          {/* Input Name */}
          <div className={`${`${styles.containerInput}`}`}>
            <input
              className={`${`${styles.itemInput}`}`}
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label
              for="name"
              className={`text-paragraph ${`${styles.itemLabel}`}`}
            >
              Name
            </label>
          </div>
          {/* Input Surname */}
          <div className={`${`${styles.containerInput}`}`}>
            <input
              className={`${`${styles.itemInput}`}`}
              type="text"
              placeholder="Surname"
              name="surname"
              id="surname"
              required
            />
            <label
              for="surname"
              className={`text-paragraph ${`${styles.itemLabel}`}`}
            >
              Surname
            </label>
          </div>
          {/* Input Email */}
          <div className={`${`${styles.containerInput}`}`}>
            <input
              className={`${`${styles.itemInput}`}`}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label
              for="email"
              className={`text-paragraph ${`${styles.itemLabel}`}`}
            >
              Email
            </label>
          </div>
          {/* Input Subject */}
          <div className={`${`${styles.containerInput}`}`}>
            <input
              className={`${`${styles.itemInput}`}`}
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <label
              for="subject"
              className={`text-paragraph ${`${styles.itemLabel}`}`}
            >
              Subject
            </label>
          </div>
          {/* Input Description */}
          <div className={`${`${styles.containerInput}`}`}>
            <textarea
              className={`${`${styles.itemInputTextarea}`}`}
              placeholder="Description"
              name="description"
              id="description"
              required
            ></textarea>
            <label
              for="description"
              className={`text-paragraph ${`${styles.itemLabel}`}`}
            >
              Description
            </label>
          </div>
          {/* Input Submit */}
          <div className={`${`${styles.containerSubmit}`}`}>
            <input
              type="submit"
              value="Send"
              className={`${`text-paragraph ${styles.itemSubmit}`}`}
            />
          </div>
        </form>
      </section>
    </section>
  );
}
