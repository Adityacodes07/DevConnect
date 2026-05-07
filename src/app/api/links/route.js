let links = [
  { id: 1, title: "GitHub", url: "https://github.com" },
];

export async function GET() {
  return Response.json(links);
}

export async function POST(req) {
  const body = await req.json();

  const newLink = {
    id: Date.now(),
    title: body.title,
    url: body.url,
  };

  links.push(newLink);

  return Response.json(newLink);
}

export async function DELETE(req) {
  const { id } = await req.json();

  links = links.filter((link) => link.id !== id);

  return Response.json({ success: true });
}