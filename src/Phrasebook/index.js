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
    <section className="phrasebook">
      <div className="categories">
        {errorCats && (
          <pre>"Failed to load Categories list. And this is not my fault"</pre>
        )}
        {!errorCats && categories.length === 0 && (
          <pre>"Categories list is empty"</pre>
        )}
        <ul className="categories__list">
          {categories.map((c) => (
            <li
              className="categories__item"
              key={c._id}
              onClick={() => setActiveCategory(c.title)}
            >
              {c.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="dictionary" onClick={sayit}>
        {errorWords && (
          <pre>"Failed to load Words list. And this is not my fault!"</pre>
        )}
        {!errorWords && words.length === 0 && (
          <pre>"There are no words added into this category yet!"</pre>
        )}
        <ul className="dictionary__list">
          {words.map((w) => (
            <li className="dictionary__item" key={w._id}>
              <div className="word">
                <div className="word__english">{w.english}</div>
                <div className="word__russian"><span className="listenable" data-say={w.russian}>{w.russian}</span></div>
                <div className="word__translit">{w.translit || 'translit'}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
