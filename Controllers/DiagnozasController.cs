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
    public class DiagnozasController : ControllerBase
    {
        private readonly EhrDbContext _context;

        public DiagnozasController(EhrDbContext context)
        {
            _context = context;
        }

        // GET: api/Diagnozas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Diagnoza>>> GetDiagnozas()
        {
          if (_context.Diagnozas == null)
          {
              return NotFound();
          }
            return await _context.Diagnozas.ToListAsync();
        }

        // GET: api/Diagnozas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Diagnoza>> GetDiagnoza(int id)
        {
          if (_context.Diagnozas == null)
          {
              return NotFound();
          }
            var diagnoza = await _context.Diagnozas.FindAsync(id);

            if (diagnoza == null)
            {
                return NotFound();
            }

            return diagnoza;
        }

        // PUT: api/Diagnozas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDiagnoza(int id, Diagnoza diagnoza)
        {
            if (id != diagnoza.DiagnozaId)
            {
                return BadRequest();
            }

            _context.Entry(diagnoza).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiagnozaExists(id))
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

        // POST: api/Diagnozas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Diagnoza>> PostDiagnoza(Diagnoza diagnoza)
        {
          if (_context.Diagnozas == null)
          {
              return Problem("Entity set 'EhrDbContext.Diagnozas'  is null.");
          }
            _context.Diagnozas.Add(diagnoza);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDiagnoza", new { id = diagnoza.DiagnozaId }, diagnoza);
        }

        // DELETE: api/Diagnozas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDiagnoza(int id)
        {
            if (_context.Diagnozas == null)
            {
                return NotFound();
            }
            var diagnoza = await _context.Diagnozas.FindAsync(id);
            if (diagnoza == null)
            {
                return NotFound();
            }

            _context.Diagnozas.Remove(diagnoza);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DiagnozaExists(int id)
        {
            return (_context.Diagnozas?.Any(e => e.DiagnozaId == id)).GetValueOrDefault();
        }
    }
}
