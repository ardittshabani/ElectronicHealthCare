using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectronicHealthCare.Models;

namespace ElectronicHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientisController : ControllerBase
    {
        private readonly EhrDbContext _context;

        public PacientisController(EhrDbContext context)
        {
            _context = context;
        }

        // GET: api/Pacientis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pacienti>>> GetPacientis()
        {
          if (_context.Pacientis == null)
          {
              return NotFound();
          }
            return await _context.Pacientis.ToListAsync();
        }

        // GET: api/Pacientis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pacienti>> GetPacienti(int id)
        {
          if (_context.Pacientis == null)
          {
              return NotFound();
          }
            var pacienti = await _context.Pacientis.FindAsync(id);

            if (pacienti == null)
            {
                return NotFound();
            }

            return pacienti;
        }

        // PUT: api/Pacientis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPacienti(int id, Pacienti pacienti)
        {
            if (id != pacienti.PacientiId)
            {
                return BadRequest();
            }

            _context.Entry(pacienti).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacientiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pacientis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pacienti>> PostPacienti(Pacienti pacienti)
        {
          if (_context.Pacientis == null)
          {
              return Problem("Entity set 'EhrDbContext.Pacientis'  is null.");
          }
            _context.Pacientis.Add(pacienti);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPacienti", new { id = pacienti.PacientiId }, pacienti);
        }

        // DELETE: api/Pacientis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePacienti(int id)
        {
            if (_context.Pacientis == null)
            {
                return NotFound();
            }
            var pacienti = await _context.Pacientis.FindAsync(id);
            if (pacienti == null)
            {
                return NotFound();
            }

            _context.Pacientis.Remove(pacienti);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PacientiExists(int id)
        {
            return (_context.Pacientis?.Any(e => e.PacientiId == id)).GetValueOrDefault();
        }
    }
}
