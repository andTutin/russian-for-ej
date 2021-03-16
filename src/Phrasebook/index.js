import { useState } from "react";
import { useSpeaker } from "../Speaker";
import { useEffect } from "react";
import { BASE_URL } from "../config";
import "./Phrasebook.css";

export const Phrasebook = () => {
  const sayit = useSpeaker();
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [errorCats, setErrorCats] = useState(false);
  const [errorWords, setErrorWords] = useState(false);
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}api/category`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        const data = await res.json();

        setCategories(data);
        setActiveCategory(data[0].title);
      } catch (error) {
        setErrorCats(true);
        setErrorWords(true);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getWords = async (activeCategory) => {
      if (!activeCategory) return;

      try {
        const res = await fetch(
          `${BASE_URL}api/word/search?category=${activeCategory}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        const data = await res.json();
        setWords(data);
        setIsLoading(false);
      } catch (error) {
        setErrorWords(true);
      }
    };

    getWords(activeCategory);
  }, [activeCategory]);

  if (isLoading) return null;

  return (
    <>
      {console.log("render phrasebook")}
      <div className="phrasebook">
        <div className="categories">
          {errorCats && (
            <pre>
              "Failed to load Categories list. And this is not my fault"
            </pre>
          )}
          {!errorCats && categories.length === 0 && (
            <pre>"Categories list is empty"</pre>
          )}
          {categories.map((c) => (
            <article key={c._id}>
              <aside
                onClick={() => setActiveCategory(c.title)}
                style={{ cursor: "pointer" }}
              >
                <p>{c.title}</p>
              </aside>
              <br />
            </article>
          ))}
        </div>
        <div className="dictionary" onClick={sayit}>
          {errorWords && (
            <pre>"Failed to load Words list. And this is not my fault!"</pre>
          )}
          {!errorWords && words.length === 0 && (
            <pre>"There are no words added into this category yet!"</pre>
          )}
          <ul>
            {words.map((w) => (
              <li key={w._id}>
                {w.english} - <span data-say={w.russian}>{w.russian}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
