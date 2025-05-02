'use client'

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const week3 = {
  week: "Week 3 – Linked Lists & Stacks",
  theory: [
    {
      title: "Linked Lists",
      description: `Una lista enlazada es una estructura de datos lineal donde cada nodo apunta al siguiente.

🧠 Idea:
- El nodo contiene un valor y una referencia al siguiente.
- Se recorre con punteros, usualmente con while o recursion.

📘 Ejemplos comunes:
- Revertir lista
- Detectar ciclos
- Encontrar k-ésimo nodo desde el final

🧪 Plantilla:
\`\`\`typescript
let curr = head;
while (curr !== null) {
  // procesar curr
  curr = curr.next;
}
\`\`\``
    },
    {
      title: "Stacks",
      description: `Stack (pila) es una estructura LIFO (Last-In First-Out). Muy útil para:
- Validar paréntesis
- Revertir estructuras
- Guardar estados previos

🧪 Plantilla:
\`\`\`typescript
const stack: any[] = [];
stack.push(valor);
stack.pop();
\`\`\``
    }
  ],
  days: [
    {
      day: "Monday",
      problems: [
        { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list", difficulty: "Easy" },
        { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle", difficulty: "Easy" }
      ]
    },
    {
      day: "Tuesday",
      problems: [
        { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists", difficulty: "Easy" },
        { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list", difficulty: "Medium" }
      ]
    },
    {
      day: "Wednesday",
      problems: [
        { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses", difficulty: "Easy" },
        { title: "Min Stack", link: "https://leetcode.com/problems/min-stack", difficulty: "Medium" }
      ]
    },
    {
      day: "Thursday",
      problems: [
        {
          title: "Copy List with Random Pointer",
          link: "https://leetcode.com/problems/copy-list-with-random-pointer",
          difficulty: "Medium"
        }
      ]
    }
  ]
};

const week4 = {
  week: "Week 4 – Trees (DFS/BFS)",
  theory: [
    {
      title: "DFS y BFS en Árboles",
      description: `DFS (Depth-First Search) y BFS (Breadth-First Search) son formas comunes de recorrer árboles o grafos.

🧠 DFS:
- Preorder, Inorder, Postorder (normalmente con recursion)

🧠 BFS:
- Nivel por nivel usando una queue

🧪 Plantilla DFS:
\`\`\`typescript
function dfs(node) {
  if (!node) return;
  dfs(node.left);
  dfs(node.right);
}
\`\`\`

🧪 Plantilla BFS:
\`\`\`typescript
const queue = [root];
while (queue.length) {
  const node = queue.shift();
  queue.push(node.left, node.right);
}
\`\`\``
    }
  ],
  days: [
    {
      day: "Monday",
      problems: [
        { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree", difficulty: "Easy" },
        { title: "Same Tree", link: "https://leetcode.com/problems/same-tree", difficulty: "Easy" }
      ]
    },
    {
      day: "Tuesday",
      problems: [
        { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree", difficulty: "Easy" },
        { title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree", difficulty: "Easy" }
      ]
    },
    {
      day: "Wednesday",
      problems: [
        { title: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree", difficulty: "Easy" },
        { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal", difficulty: "Medium" }
      ]
    },
    {
      day: "Thursday",
      problems: [
        { title: "Lowest Common Ancestor of BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree", difficulty: "Medium" },
        { title: "Path Sum", link: "https://leetcode.com/problems/path-sum", difficulty: "Easy" }
      ]
    },
    {
      day: "Friday",
      problems: [
        {
          title: "Serialize and Deserialize Binary Tree",
          link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
          difficulty: "Hard"
        }
      ]
    },
  ]
}

const week5 = {
  week: "Week 5 – Binary Search & Recursion",
  theory: [
    {
      title: "Binary Search",
      description: `Usado cuando el array está ordenado. Permite buscar en O(log n).

🧪 Plantilla:
\`\`\`typescript
let left = 0, right = arr.length - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
\`\`\``
    },
    {
      title: "Recursion",
      description: `Recursión es una función que se llama a sí misma para dividir el problema.

🧪 Tip:
- Siempre definí el caso base
- Pensá el problema en una subestructura más simple

Ejemplo clásico:
\`\`\`typescript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
\`\`\``
    }
  ],
  days: [
    {
      day: "Monday",
      problems: [
        { title: "Binary Search", link: "https://leetcode.com/problems/binary-search", difficulty: "Easy" },
        { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position", difficulty: "Easy" }
      ]
    },
    {
      day: "Tuesday",
      problems: [
        { title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version", difficulty: "Easy" },
        { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array", difficulty: "Medium" }
      ]
    },
    {
      day: "Wednesday",
      problems: [
        { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array", difficulty: "Medium" },
        { title: "Time Based Key-Value Store", link: "https://leetcode.com/problems/time-based-key-value-store", difficulty: "Medium" }
      ]
    },
    {
      day: "Thursday",
      problems: [
        {
          title: "Median of Two Sorted Arrays",
          link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
          difficulty: "Hard"
        }
      ]
    }
    
  ]
}


interface Problem {
  title: string;
  link: string;
  difficulty: string;
}

interface DayPlan {
  day: string;
  problems: Problem[];
}

interface TheoryTopic {
  title: string;
  description: string;
}

interface WeekPlan {
  week: string;
  theory: TheoryTopic[];
  days: DayPlan[];
}

const learningPlan: WeekPlan[] = [
  {
    week: "Week 1 – Arrays & Hash Maps",
    theory: [
      {
        title: "Hash Map / Set",
        description: `Muy útiles para guardar frecuencia, conteo, o para saber si ya viste un elemento.

📘 Ejemplos comunes:
- Two Sum
- Valid Anagram
- Contains Duplicate

🧪 Ejemplo:
\`\`\`typescript
const map = new Map();
for (const num of nums) {
  if (map.has(target - num)) return true;
  map.set(num, true);
}
\`\`\`

👍 Cuándo usarlo:
- Necesitás acceder a elementos en O(1)
- Verificar repeticiones, conteo o frecuencia`
      }
    ],
    days: [
      {
        day: "Monday",
        problems: [
          { title: "Two Sum", link: "https://leetcode.com/problems/two-sum", difficulty: "Easy" },
          { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate", difficulty: "Easy" }
        ]
      },
      {
        day: "Tuesday",
        problems: [
          { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram", difficulty: "Easy" },
          { title: "Intersection of Two Arrays II", link: "https://leetcode.com/problems/intersection-of-two-arrays-ii", difficulty: "Easy" }
        ]
      },
      {
        day: "Wednesday",
        problems: [
          { title: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence", difficulty: "Easy" },
          { title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome", difficulty: "Easy" }
        ]
      },
      {
        day: "Thursday",
        problems: [
          { title: "Majority Element", link: "https://leetcode.com/problems/majority-element", difficulty: "Easy" },
          { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams", difficulty: "Medium" }
        ]
      },
      {
        day: "Friday",
        problems: [
          { title: "Max Consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones", difficulty: "Easy" },
          { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements", difficulty: "Medium" }
        ]
      },
      {
        day: "Saturday",
        problems: [
          { title: "Missing Number", link: "https://leetcode.com/problems/missing-number", difficulty: "Easy" },
          { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self", difficulty: "Medium" }
        ]
      }
    ]
  },
  {
    week: "Week 2 – Two Pointers & Sliding Window",
    theory: [
      {
        title: "Sliding Window",
        description: `El patrón "Sliding Window" se usa típicamente en problemas de arrays o strings para encontrar subarrays/substrings que cumplan ciertas condiciones.

🧠 Idea:
- Usás dos punteros (inicio y fin) para representar una ventana dinámica.
- Expandís hasta que se rompe la condición.
- Luego contraés desde la izquierda.

🧪 Plantilla:
\`\`\`typescript
let left = 0;
for (let right = 0; right < s.length; right++) {
    while (/* condición inválida */) {
        left++;
    }
    // actualizar resultado
}
\`\`\``
      },
      {
        title: "Two Pointers",
        description: `El patrón "Two Pointers" se usa cuando necesitás recorrer un array desde ambos extremos o mantener dos índices con lógica coordinada.

🧠 Idea:
- Usás puntero al inicio y final.
- Los movés hacia el centro según la lógica.

🧪 Plantilla:
\`\`\`typescript
let left = 0;
let right = arr.length - 1;
while (left < right) {
  if (/* condición */) left++;
  else right--;
}
\`\`\``
      }
    ],
    days: [
      {
        day: "Monday",
        problems: [
          { title: "Two Sum II", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted", difficulty: "Easy" },
          { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string", difficulty: "Easy" }
        ]
      },
      {
        day: "Tuesday",
        problems: [
          { title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes", difficulty: "Easy" },
          { title: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number", difficulty: "Easy" }
        ]
      },
      {
        day: "Wednesday",
        problems: [
          { title: "Valid Mountain Array", link: "https://leetcode.com/problems/valid-mountain-array", difficulty: "Easy" },
          { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock", difficulty: "Medium" }
        ]
      },
      {
        day: "Thursday",
        problems: [
          { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array", difficulty: "Easy" },
          { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters", difficulty: "Medium" }
        ]
      },
      {
        day: "Friday",
        problems: [
          { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array", difficulty: "Easy" },
          { title: "3Sum", link: "https://leetcode.com/problems/3sum", difficulty: "Medium" }
        ]
      },
      {
        day: "Saturday",
        problems: [
          { title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr", difficulty: "Easy" },
          { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water", difficulty: "Medium" }
        ]
      }
    ]
  },
  week3,
  week4,
  week5
];

export default function Home() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  return (
    <main className="p-6 max-w-5xl mx-auto min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">LeetCode Prep Roadmap</h1>
      {learningPlan.map((week, index) => (
        <div key={week.week} className="mb-6 border rounded-lg border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setOpenWeek(openWeek === index ? null : index)}
            className="w-full text-left px-4 py-3 font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {openWeek === index ? '▼' : '▶'} {week.week}
          </button>
          {openWeek === index && (
            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-300 dark:divide-gray-700">
              <div className="lg:w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">📘 Teoría</h2>
                {week.theory.map((topic) => (
                  <div key={topic.title} className="mb-4">
                    <h3 className="font-bold text-blue-600 dark:text-blue-400">{topic.title}</h3>
                    <div className="mt-1 text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded prose dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({ className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !props.inline && match ? (
                              <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            );
                          }
                        }}
                      >
                        {topic.description}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">🧪 Práctica</h2>
                {week.days.map((day) => (
                  <div key={day.day} className="mb-4">
                    <h3 className="font-semibold mb-1">{day.day}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {day.problems.map((p) => (
                        <li key={p.title}>
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {p.title} <span className="text-sm text-gray-700 dark:text-gray-300">({p.difficulty})</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
