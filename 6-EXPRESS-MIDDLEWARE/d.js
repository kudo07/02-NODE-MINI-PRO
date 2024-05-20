const rows = [
  ...Array.from({ length: 20 }, (_, i) => ({
    created_at: new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
    amount: ['10,000'][Math.floor(Math.random() * 1)],
    status: ['Queued'][Math.floor(Math.random() * 1)],
    contact: [
      'Shivam Arora',
      'John Doe',
      'Jane Doe',
      'Johny Bravo',
      'Peter Dinklage',
      'Bruce Wayne',
      'Michael Scott',
    ][Math.floor(Math.random() * 2)],
    created_by: [
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
      'Aditya Sharma',
    ][Math.floor(Math.random() * 7)],
    utr: '-',
  })),
];
console.log(rows);
// https://chatgpt.com/c/9e2049cf-10a1-4145-9a15-ffffb967bc1c
// ? tab==>
// https://chatgpt.com/c/10da07b0-ab0d-47d6-8f29-4671a7032b32
