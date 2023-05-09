
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([{
        name:"Ali",
        email:"ali@gmail.com",
        product:'Bike',
    },

    {
        name:"Asad",
        email:"asad@gmail.com",
        product:'Car', 
    }
]);
  }

else if (req.method === 'POST') {
    const {name, email, product } = req.body;
    res.status(200).json({ message: 'Data received successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
  }



 
