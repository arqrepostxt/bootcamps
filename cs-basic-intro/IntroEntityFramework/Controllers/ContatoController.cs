using Microsoft.AspNetCore.Mvc;
using IntroEntityFramework.Data;
using IntroEntityFramework.Data.Entities;

namespace IntroEntityFramework.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        public readonly Context _context;

        public ContatoController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Criar(Contato contato)
        {
            _context.Add(contato);
            _context.SaveChanges();

            // return Ok(contato);
            return CreatedAtAction(nameof(ObterPorId), new { id = contato.Id}, contato);
        }
        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            var contato = _context.Contatos.Find(id);
            if (contato == null)
            {
                return NotFound();
            }

            return Ok(contato);
        }

        [HttpGet("ObterPorNome")]
        public IActionResult ObterPorNome(string nome)
        {
            var contato = _context.Contatos.Where(x => x.Nome.Equals(nome));
            return Ok(contato);
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Contato contato)
        {
            var contatoBanco = _context.Contatos.Find(id);
            if(contatoBanco == null)
            {
                return NotFound();
            }
            
            contatoBanco.Nome = contato.Nome;
            contatoBanco.Telefone = contato.Telefone;
            contatoBanco.Ativo = contato.Ativo;

            _context.Contatos.Update(contatoBanco);
            _context.SaveChanges();

            return Ok(contatoBanco);
        }

        [HttpDelete("{id}")]
        public IActionResult Remover(int id)
        {
            var contatoBanco = _context.Contatos.Find(id);
            
            if (contatoBanco == null)
            {
                return NotFound();
            }

            _context.Contatos.Remove(contatoBanco);
            _context.SaveChanges();

            return NoContent();
        }
    }
}