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
    public class TerminisController : ControllerBase
    {
        private readonly EhrDbContext _context;

        public TerminisController(EhrDbContext context)
        {
            _context = context;
        }

        // GET: api/Terminis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Termini>>> GetTerminis()
        {
          if (_context.Terminis == null)
          {
              return NotFound();
          }
            return await _context.Terminis.ToListAsync();
        }

        // GET: api/Terminis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Termini>> GetTermini(int id)
        {
          if (_context.Terminis == null)
          {
              return NotFound();
          }
            var termini = await _context.Terminis.FindAsync(id);

            if (termini == null)
            {
                return NotFound();
            }

            return termini;
        }

        // PUT: api/Terminis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTermini(int id, Termini termini)
        {
            if (id != termini.TerminiId)
            {
                return BadRequest();
            }

            _context.Entry(termini).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TerminiExists(id))
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

        // POST: api/Terminis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Termini>> PostTermini(Termini termini)
        {
          if (_context.Terminis == null)
          {
              return Problem("Entity set 'EhrDbContext.Terminis'  is null.");
          }
            _context.Terminis.Add(termini);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTermini", new { id = termini.TerminiId }, termini);
        }

        // DELETE: api/Terminis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTermini(int id)
        {
            if (_context.Terminis == null)
            {
                return NotFound();
            }
            var termini = await _context.Terminis.FindAsync(id);
            if (termini == null)
            {
                return NotFound();
            }

            _context.Terminis.Remove(termini);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TerminiExists(int id)
        {
            return (_context.Terminis?.Any(e => e.TerminiId == id)).GetValueOrDefault();
        }
    }
}
