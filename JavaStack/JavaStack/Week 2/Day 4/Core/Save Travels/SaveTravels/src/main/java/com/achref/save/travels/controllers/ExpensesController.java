package com.achref.save.travels.controllers;

import java.awt.print.Book;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.achref.save.travels.models.Expenses;
import com.achref.save.travels.services.ExpensesService;

import jakarta.validation.Valid;

@Controller
public class ExpensesController {

	@Autowired
	ExpensesService expensesSer;
	
	@GetMapping("/expenses")
	public String newExpenses(@ModelAttribute("expenses")Expenses expenses,Model model) {
		List<Expenses> allExpenses = expensesSer.getAllExpenses();
		model.addAttribute("allExpenses",allExpenses);
		return "index.jsp";
	}
	
	@PostMapping("/create/expenses")
	public String createExpenses(@Valid @ModelAttribute("Expenses") Expenses expenses,BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}else {
				Expenses newExpen= expensesSer.createExpenses(expenses);
				return "redirect:/expenses";
			  }
	}
	 @DeleteMapping("/expenses/{id}/delete")
	    public String destroy(@PathVariable("id") Long id) {
		 expensesSer.deleteExpenses(id);
	        return "redirect:/expenses";
	    }
	 
	    /** edit*/
	    @GetMapping("/expenses/{id}/edit")
	    public String edit(@PathVariable("id") Long id, Model model) {
	    	Expenses expenses = expensesSer.findOne(id);
	    	model.addAttribute("expenses", expenses);
	    	return "edit.jsp";
	    }
	    
	    @PutMapping("/edit/{id}")
	    public String update(@Valid @ModelAttribute("expenses") Expenses expenses, BindingResult result) {
	        if (result.hasErrors()) {
	            return "book/edit.jsp";
	        } else {
	            expensesSer.updateExpenses(expenses);
	            return "redirect:/expenses";
	        }
	    }
		@GetMapping("/expenses/{id}")
		public String oneExpenses(@PathVariable("id") Long id,Model model) {
			Expenses oneExpenses = expensesSer.findOne(id);
			model.addAttribute("oneExpenses",oneExpenses );
			return "one.jsp";
		}
}
