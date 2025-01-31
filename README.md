In this project, I've Built an **Faqs App** by applying the concepts I have learned till now.

### Result is as per the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif" alt="faqs-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completed Steps

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- When the plus icon is clicked in a FAQ
  - The answer to the FAQ is visible to the user
  - The plus icon changes to a minus icon
- When the minus icon is clicked in a FAQ
  - The answer to the FAQ is hidden from the user
  - The minus icon changes to a plus icon
- The `Faqs` component receives the `faqsList` as a prop. It consists of a list of faq objects with the following properties in each faq object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | questionText |  String   |
  |  answerText  |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/faqs-component-structure-breakdown.png" alt="faqs-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Files Implementated</summary>
<br/>

Used these files to complete the implementation:

- `src/components/Faqs/index.js`
- `src/components/Faqs/index.css`
- `src/components/FaqItem/index.js`
- `src/components/FaqItem/index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png) alt is **plus**
- [https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png) alt is **minus**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #cb8805; width: 150px; padding: 10px; color: white">Hex: #cb8805</div>
<div style="background-color: #52606d; width: 150px; padding: 10px; color: white">Hex: #52606d</div>
<div style="background-color: #9aa5b1; width: 150px; padding: 10px; color: white">Hex: #9aa5b1</div>

#### Border Colors

<div style="background-color: #d7dae6; width: 150px; padding: 10px; color: black">Hex: #d7dae6</div>
<div style="background-color: #e4e7eb; width: 150px; padding: 10px; color: black">Hex: #e4e7eb</div>

#### Background Colors

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f1f5f8; width: 150px; padding: 10px; color: black">Hex: #f1f5f8</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

### Conclusion

Thank you for exploring my Faqs App! This app demonstrates my understanding of React concepts like state management and event handling. It allows users to toggle FAQ answers using plus and minus icons.

Happy coding! 🚀

